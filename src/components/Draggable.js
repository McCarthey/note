import React from 'react';
import produce from 'immer'
import TextField from '@material-ui/core/TextField'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Message from './Message'
import request from '../utils/request'

import Skeleton from './Skeleton'

// const getItems = count =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k}`,
//     content: `item ${k}`,
//     editable: false
//   }));

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
      items: [],
      snackbar: {
        open: false,
        message: '',
        type: '',
      },
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  handleChange = index => event => {
    const newValue = event.target.value
    this.setState(produce(draft => {
      draft.items[index].content = newValue
    }))
  }

  toggleEdit = index => () => {
    this.setState(produce(draft => {
      draft.items[index].editable = !draft.items[index].editable
    }))
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

  handleSave = item => async () => {
    // TODO: 先更新远程数据，成功后setState
    try {
      await request.postJSON(`/update/${item.id}`, {
        note: item.content,
        order: this.state.items.map(n => n.id)
      })
      this.setState(
          {
              snackbar: {
                  open: true,
                  message: '保存成功',
                  type: 'success',
              },
          },
      )
  } catch (e) {
      this.setState({
          snackbar: {
              open: true,
              message: e.msg,
              type: 'error',
          },
      })
  }

    console.log('save:', item)

  }

  handleDelete = item => () => {
    // TODO: 先更新远程数据，成功后setState
    console.log('del:',item)
  }

  async componentDidMount() {
    try {
      const data = await request.get('/getNotes')
      if (!data) {
          return false // 数据为空
      }
      console.log('Datas: ', data)
      let items = []
      for(let key in data) {
        items.push({id: key, content: data[key], editable: false})	
      }
      this.setState({ items })
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
              onClick={this.toggleEdit(index)}
                >
              {item.editable ?
              <div>
                <TextField
                  label="Note"
                  multiline
                  rowsMax="5"
                  fullWidth
                  className="input-multiline"
                  value={item.content} onChange={this.handleChange(index)}
                  margin="normal"
                  variant="outlined"
                  onClick={this.toggleEdit(index)}
                /> 
                <button onClick={this.handleSave(item)}>Save</button>
                <button onClick={this.handleDelete(item)}>Delete</button>
              </div> :
              <div className="text-multiline"><pre>{item.content}</pre></div>
              }
            </div>
          )}
        </Draggable>
      ))
    } else {
      content = <Skeleton />
    }

    return (
      <div>
        <Message {...this.state.snackbar} onClose={this.handleClose} />
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
      </div>
    );
  }
}
