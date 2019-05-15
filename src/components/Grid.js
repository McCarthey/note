import React from 'react'
import GridLayout from 'react-grid-layout'
import request from '../utils/request'
import './grid.css'

export default class MyFirstGrid extends React.Component {
    state = {
        layout: [
            { i: 'a', x: 0, y: 0, w: 1, h: 2 },
            { i: 'b', x: 1, y: 0, w: 3, h: 2 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 },
        ],
    }

    changeStop = layout => {
        this.setState({ layout })
    }

    handleSave = async () => {
        const dataJSON = JSON.stringify(this.state.layout)
        localStorage.setItem('NOTE_DATA', dataJSON)
        try {
            // TODO: 根据cookie-session查找请求者
            await request.get('/test')
            // this.setState(
            //     {
            //         snackbar: {
            //             open: true,
            //             message: '注册成功',
            //             type: 'success',
            //         },
            //     },
            //     () => {
            //         setTimeout(() => {
            //             this.props.history.push('/signin')
            //         }, 1000)
            //     },
            // )
        } catch (e) {
            this.setState({
                snackbar: {
                    open: true,
                    message: e.msg,
                    type: 'error',
                },
            })
        }
    }

    async componentDidMount() {
        if (localStorage.getItem('NOTE_DATA')) {
            this.setState({
                layout: JSON.parse(localStorage.getItem('NOTE_DATA')),
            })
        }
        try {
            const res = await request.get('/getNotes')
            console.log(res)
        }
        catch(e) {
            this.setState({
                snackbar: {
                    open: true,
                    message: e.msg,
                    type: 'error',
                },
            })
        }
    }

    render() {
        // layout is an array of objects, see the demo for more complete usage
        const { layout } = this.state
        return (
            <div>
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={12}
                    rowHeight={30}
                    width={1080}
                    onDragStop={this.changeStop}
                    onResizeStop={this.changeStop}
                >
                    <div key="a">a</div>
                    <div key="b">b</div>
                    <div key="c">c</div>
                </GridLayout>
                <button onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}
