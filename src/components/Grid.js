import React from 'react'
import GridLayout from 'react-grid-layout'
import request from '../utils/request'
import Message from './Message'
import './grid.css'

export default class MyFirstGrid extends React.Component {
    state = {
        layout: [],
        snackbar: {
            open: false,
            message: '',
            type: '',
        },
    }

    createElement(el) {
        const removeStyle = {
            position: "absolute",
            right: "2px",
            top: 0,
            cursor: "pointer",
        };
        const i = el.add ? "+" : el.i;
        return (
            <div key={i} data-grid={el}>
                {el.add ? (
                    <span
                        className="add text"
                        onClick={this.onAddItem}
                        title="You can add an item by clicking here, too."
                    >
                        Add +
              </span>
                ) : (
                        <span className="text">{i}</span>
                    )}
                <span
                    className="remove"
                    style={removeStyle}
                    onClick={() => this.handleRemoveItem(i)}
                >
                    x
            </span>
            </div>
        );
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

    handleLayoutChange = layout => {
        console.log(layout)
        this.setState({ layout })
    }

    handleRemoveItem(i) {
        console.log(i)
        this.setState({
            layout: this.state.layout.filter(item => item.i !== i)
        })
    }

    handleAddItem() {
        this.setState({
            layout: this.state.layout.concat({
                i: (+ new Date()).toString(),
                x: (this.state.layout.length * 2) % 12,
                y: 0, // puts it at the bottom
                w: 2,
                h: 2
            }),
        });
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
                    onLayoutChange={this.handleLayoutChange}
                >
                    {this.state.layout.map(el => this.createElement(el))}
                </GridLayout>
                <button onClick={() => this.handleSave()}>Save</button>
                <button onClick={() => this.handleAddItem()}> Add Item</button>
            </div>
        )
    }
}
