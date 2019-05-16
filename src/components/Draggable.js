import React from 'react';
import produce from 'immer'
import TextField from '@material-ui/core/TextField'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Skeleton from './Skeleton'

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: "#fff",
  border: '2px solid',
  borderColor: isDragging ? "lightblue" : "transparent",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  boxSizing: 'border-box',
  background: isDraggingOver ? "lightpink" : "#eee",
  border: '1px solid #ccc',
  padding: grid,
  width: '100%',
  maxWidth: '480px',
  margin: '0 auto',
});

export default class Drag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  handleChange = index => event => {
    const newValue = event.target.value
    this.setState(produce(draft => {
      draft.items[index].content = newValue
    }))
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        items: getItems(10)
      })
    }, 3000)
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    let content
    if (this.state.items.length) {
      content = this.state.items.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <div
            ref={provided.innerRef}
            {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
                )}
                >
              <TextField
                label="Note"
                multiline
                rowsMax="6"
                fullWidth
                className="input-multiline"
                value={item.content} onChange={this.handleChange(index)}
                margin="normal"
                variant="outlined"
              />
            </div>
          )}
        </Draggable>
      ))
    } else {
      content = <Skeleton />
    }

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            >
              {content}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
