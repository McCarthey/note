import React from 'react'
import GridLayout from 'react-grid-layout'
import request from '../utils/request'
import Message from './Message'
import './grid.css'

export default class MyFirstGrid extends React.Component {
    state = {
        layout: [
            { i: 'a', x: 0, y: 0, w: 1, h: 2 },
            { i: 'b', x: 1, y: 0, w: 3, h: 2 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 },
        ],
        snackbar: {
            open: false,
            message: '',
            type: '',
        },
    }

    handleClose = () => {
        this.setState({
            snackbar: {
                open: false,
                message: '',
                type: '',
            },
        })
    }

    changeStop = layout => {
        this.setState({ layout })
    }

    async handleSave() {
        const dataJSON = JSON.stringify(this.state.layout)
        localStorage.setItem('NOTE_DATA', dataJSON)
        try {
            await request.postJSON('/updateNotes', {
                notes: dataJSON
            })
            this.setState({
                snackbar: {
                    open: true,
                    message: 'Save successfully!',
                    type: 'success',
                },
            })
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
            const layout = await request.get('/getNotes')
            this.setState({ layout: JSON.parse(layout) })
        }
        catch (e) {
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
                <Message {...this.state.snackbar} onClose={this.handleClose} />
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
                <button onClick={() => this.handleSave()}>Save</button>
            </div>
        )
    }
}
