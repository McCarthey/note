import React from 'react'
import GridLayout from 'react-grid-layout'
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
        console.log(layout)
        this.setState({ layout })
    }

    handleSave = () => {
        localStorage.setItem('NOTE_DATA', JSON.stringify(this.state.layout))
    }

    componentDidMount() {
        console.log(this.props)
        if (localStorage.getItem('NOTE_DATA')) {
            this.setState({
                layout: JSON.parse(localStorage.getItem('NOTE_DATA')),
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
                    <div className="" key="a">
                        a
                    </div>
                    <div className="" key="b">
                        b
                    </div>
                    <div className="" key="c">
                        c
                    </div>
                </GridLayout>
                <button onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}
