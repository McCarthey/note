import React from 'react';
import GridLayout from 'react-grid-layout';
import './grid.css';

export default class MyFirstGrid extends React.Component {
    state = {
        layout :[
            { i: 'a', x: 0, y: 0, w: 1, h: 2},
            { i: 'b', x: 1, y: 0, w: 3, h: 2 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 }
        ]
    }

    changeStop = () => {
        console.log(this.state.layout)
    }

    render() {
        // layout is an array of objects, see the demo for more complete usage
        const {layout} = this.state
        return (
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1080} onDragStop={this.changeStop} onResizeStop={this.changeStop}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
            </GridLayout>
        )
    }
}