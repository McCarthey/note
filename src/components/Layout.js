import React from 'react'
import request from '../utils/request'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { HashRouter as Router, Link, Route } from 'react-router-dom'

import SignIn from './SignIn'
import SignUp from './SignUp'
import Drag from './Draggable'

import EventBus from '../utils/evebt-bus'


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class ButtonAppBar extends React.Component {
    state = {
        isLoggedIn: false,
    }

    async componentDidMount() {
        EventBus.addListener('login', () => {
            this.setState({ isLoggedIn: true })
        })
        try {
            await request.get('/checkLogin')
            this.setState({ isLoggedIn: true })
        } catch (e) {
            this.setState({ isLoggedIn: false })
        }
    }

    logout = async () => {
        try {
            await request.postJSON('/logout', {})
            this.setState({ isLoggedIn: false })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { classes } = this.props
        let logEle
        if (this.state.isLoggedIn) {
            logEle = (
                <div className="logout" onClick={this.logout}>
                    退出登录
                </div>
            )
        } else {
            logEle = (
                <div className="link-wrapper">
                    <Link to="/">笔记</Link>
                    <Link to="/signin/">登录</Link>
                    <Link to="/signup/">注册</Link>
                </div>
            )
        }
        return (
            <div className={classes.root}>
                <Router>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={classes.grow} />
                            {logEle}
                        </Toolbar>
                    </AppBar>
                    <Route path="/" exact component={Drag} />
                    <Route path="/signin/" component={SignIn} />
                    <Route path="/signup/" component={SignUp} />
                    <Route path="/drag/" component={Drag} />
                </Router>
            </div>
        )
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)
