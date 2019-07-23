const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
// const compression = require('compression')
const morgan = require('morgan')
const MongoStore = require('connect-mongo')(session);
const crypto = require('crypto')

const config = require('./config') // 这个可不敢push上来

/**
 * 连接mongodb，将数据库对象存放在全局变量db中
 */
const MongoClient = require('mongodb').MongoClient
const url = config.dbUrl // 不暴露服务器地址和mongodb端口
let db

MongoClient.connect(url, (err, client) => {
    db = client.db('note')
})

const port = 8770
const server = app.listen(port, () => {
    console.log(`Server on port http://localhost:${port}/!`)
})


const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://mccarthey.top');
    res.header('Access-Control-Allow-Headers', 'content-type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(allowCrossDomain) //运用跨域的中间件
// app.use(compression({level: 9})) // 运用gzip压缩中间件。如果使用了nginx的gzip压缩，则无需使用该中间件了
app.use(morgan('combined', { stream: accessLogStream }))
app.use(cookieParser()) // use cookie-parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'random key',
    name: 'note_app_sid',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
    store: new MongoStore({ url: `${config.dbUrl}/session` })

})) // using session

// 检查是否已经登录过
app.get('/checkLogin', (req, res) => {
    const isLogin = checkLoginStatus(req, res)
    if (isLogin) {
        res.send({
            code: 0,
            msg: 'You have logged in'
        });
    }
});

// 注册
app.post('/signUp', async (req, res) => {
    let data = req.body
    const isExisted = await checkUsername(data.username)
    if (isExisted) {
        res.send({
            code: 101,
            msg: 'Username already exists'
        })
    } else {
        const md5 = crypto.createHash('md5')
        const pwdMd5 = md5.update(data.password).digest('hex') // 得到加密后的密码
        const uid = generateId(data.username)
        const dbResult = await db.collection('users').insertOne({
            username: data.username,
            password: pwdMd5,
            uid,
            notes: []
        })
        res.send({
            code: 0,
            msg: 'Success!'
        })
    }
})

// 登录
app.post('/login', async (req, res) => {
    let data = req.body
    const isExisted = await checkUsername(data.username)
    if (!isExisted) {
        res.send({
            code: 102,
            msg: 'No such user, please sign up first'
        })
    } else {
        const md5 = crypto.createHash('md5')
        const pwdMd5 = md5.update(data.password).digest('hex') // 得到加密后的密码
        const dbResult = await db.collection('users').findOne({
            username: data.username,
        })
        // console.log(dbResult.username)
        const { username, password, uid } = dbResult
        if (password === pwdMd5) {
            req.session.login = 'Logged'
            res.cookie('uid', uid, { maxAge: 7 * 24 * 60 * 60 * 1000 })
            res.send({
                code: 0,
                msg: 'Login successfully'
            })
        } else {
            res.send({
                code: 103,
                msg: 'Invalid username or password'
            })
        }
    }
})

// 退出登录
app.post('/logout', async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.send({
                code: 998,
                msg: 'log out failed'
            })
            return
        }
        res.clearCookie('uid')
        res.send({
            code: 0,
            msg: 'Log out successfully'
        })
    })
})

// 获取用户数据
app.get('/getNotes', async (req, res) => {
    const isLogin = checkLoginStatus(req, res)
    if (!isLogin) return false
    if (isLogin) {
        try {
            const uid = req.cookies.uid
            const dbResult = await db.collection('users').findOne({
                uid,
            })
            const { notes } = dbResult
            res.send({
                code: 0,
                msg: 'success',
                data: notes
            })
        } catch (e) {
            res.send({
                code: 201,
                msg: 'Get data failed'
            })
        }
    }
})

app.post('/create', async (req, res) => {
    const isLogin = checkLoginStatus(req, res)
    if (!isLogin) return false
    const { id, content, done } = req.body
    try {
        const uid = req.cookies.uid
        const dbResult = await db.collection('users').updateOne(
            { uid },
            {
                $push: {
                    notes: {
                        $each: [{ id, content, done }],
                        $position: 0
                    }
                },
            }
        )
        res.send({
            code: 0,
            msg: 'success',
        })
    } catch (e) {
        res.send({
            code: 202,
            msg: 'Post data failed'
        })
    }
})

// 更新单条数据状态
app.post('/update/:noteId', async (req, res) => {
    const isLogin = checkLoginStatus(req, res)
    if (!isLogin) return false
    const noteId = req.params.noteId
    const { done, content } = req.body
    try {
        const uid = req.cookies.uid
        if (!content) {
            const dbResult = await db.collection('users').updateOne(
                { uid, "notes.id": noteId },
                {
                    $set: { "notes.$.done": done },
                    $currentDate: { lastModified: true }
                }
            )
        }
        else {
            const dbResult = await db.collection('users').updateOne(
                { uid, "notes.id": noteId },
                {
                    $set: { "notes.$.content": content },
                    $currentDate: { lastModified: true }
                }
            )
        }
        res.send({
            code: 0,
            msg: 'success',
        })
    } catch (e) {
        res.send({
            code: 202,
            msg: 'Post data failed'
        })
    }
})

// 删除单条数据
app.post('/delete/:noteId', async (req, res) => {
    const isLogin = checkLoginStatus(req, res)
    if (!isLogin) return false
    const noteId = req.params.noteId
    try {
        const uid = req.cookies.uid
        const dbResult = await db.collection('users').updateOne(
            { uid },
            {
                $pull: { notes: { id: noteId } },
                $currentDate: { lastModified: true }
            }
        )
        res.send({
            code: 0,
            msg: 'success',
        })
    } catch (e) {
        res.send({
            code: 202,
            msg: 'Post data failed'
        })
    }
})

// 更新用户数据
app.post('/updateNotes', async (req, res) => {
    const isLogin = checkLoginStatus(req, res)
    if (!isLogin) return false
    let { notes } = req.body
    try {
        const uid = req.cookies.uid
        const dbResult = await db.collection('users').updateOne(
            { uid },
            {
                $set: { notes },
                $currentDate: { lastModified: true }
            }
        )
        res.send({
            code: 0,
            msg: 'success',
        })
    } catch (e) {
        res.send({
            code: 202,
            msg: 'Post data failed'
        })
    }
})

app.get('/test', (req, res) => {
    res.send({
        code: 0,
        msg: 'Hello this is a test'
    })
})

// 检查用户名
async function checkUsername(username) {
    let queryRes = await db.collection('users').find({ username }).toArray()
    let isExisted = queryRes.some(i => {
        return i.username === username
    })
    return isExisted
}

// 生成唯一的userId
function generateId(data) {
    const hash = crypto.createHash('sha256')
    hash.update(data)
    return hash.digest('hex')
}

// 检查登录状态
function checkLoginStatus(req, res) {
    if (req.session.login) {
        return true
    }
    res.send({
        code: 999,
        msg: 'Please log in first'
    })
    return false
}

