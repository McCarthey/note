import React from 'react';
import produce from 'immer'
import _ from 'lodash/lang'
import TextField from '@material-ui/core/TextField'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete';

import Message from './Message'
import request from '../utils/request'

import Skeleton from './Skeleton'

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
  padding: grid / 2,
  margin: `0 0 ${grid}px 0`,
  boxSizing: 'border-box',
  border: '2px solid',
  borderRadius: '4px',
  // change background colour if dragging
  background: "#fff",
  borderColor: isDragging ? "#b3e5fc" : "#f6f6f6",
  boxShadow: isDragging ? '3px 3px 20px #4fc3f7' : 'none',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  boxSizing: 'border-box',
  background: isDraggingOver ? "#e1f5fe" : "#fff",
  border: '1px solid #ddd',
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
      done: false,
      btnSave: false,
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

  toggleEdit = index => (e) => {
    if (e.target.tagName === 'TEXTAREA') return
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

    if (_.isEqual(items, this.state.items)) return

    this.setState({ items, btnSave: true });
  }

  handleToggle = (item, index) => () => {
    this.setState(produce(draft => {
      draft.items[index].done = !draft.items[index].done
    }), async () => {
      try {
        await request.postJSON(`/update/${item.id}`, { done: this.state.items[index].done })
      } catch (e) {
        this.setState({
          snackbar: {
            open: true,
            message: e.msg,
            type: 'error',
          },
        })
      }
    })
  }

  handleCreate = () => {
    const newItem = {
      id: (+new Date()).toString(),
      content: '',
      done: false,
    }
    this.setState(produce(draft => {
      draft.items.unshift(newItem)
    }), async () => {
      try {
        await request.postJSON(`/create`, newItem)
      } catch (e) {
        this.setState({
          snackbar: {
            open: true,
            message: e.msg,
            type: 'error',
          },
        })
      }
    })
  }

  handleSave = async () => {
    const postData = this.state.items.map(n => {
      return { id: n.id, content: n.content, done: n.done }
    })
    try {
      await request.postJSON('/updateNotes', {
        notes: postData,
      })
      this.setState(
        {
          snackbar: {
            open: true,
            message: '保存成功',
            type: 'success',
          },
          btnSave: false
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
  }

  handleDelete = item => async () => {
    try {
      await request.postJSON(`/delete/${item.id}`)
      this.setState(produce(draft => {
        draft.snackbar = {
          open: true,
          message: '删除成功',
          type: 'success',
        }
        draft.items.splice(draft.items.findIndex(n => n.id === item.id), 1)
      }))
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
    try {
      const data = await request.get('/getNotes')
      if (!data) {
        return false // 数据为空
      }
      // console.log('Datas: ', data)
      const formatData = data.map(n => {
        return { id: n.id, content: n.content, done: n.done || false } // 老用户的notes中没有done属性
      })
      this.setState({ items: formatData, done: true })
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
    let content
    let btnSave
    if (this.state.items.length || this.state.done) {
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
              {item.editable ?
                <div onClick={this.toggleEdit(index)}>
                  <TextField
                    label="Note"
                    multiline
                    rowsMax="5"
                    fullWidth
                    className="input-multiline"
                    value={item.content} onChange={this.handleChange(index)}
                    margin="normal"
                    variant="outlined"
                  />
                  <div className="input-multiline-btns">
                    <IconButton onClick={this.handleSave} variant="contained" size="small" color="secondary"><SaveIcon /></IconButton>
                    <IconButton onClick={this.handleDelete(item)} variant="contained" size="small"><DeleteIcon /></IconButton>
                  </div>
                </div> :
                <div>
                  <IconButton onClick={this.handleToggle(item, index)} variant="contained" size="small" color={item.done? 'secondary' : 'default'} style={{float: 'left'}}><CheckIcon /></IconButton>
                  <div className="text-multiline" style={item.done ? { textDecoration: 'line-through', color: '#ccc' } : {}} onClick={this.toggleEdit(index)}><pre>{item.content ? item.content : <span style={{ color: '#ccc' }}>点击编辑</span>}</pre></div>
                </div>
              }
            </div>
          )}
        </Draggable>
      ))
    } else {
      content = <Skeleton />
    }

    if (this.state.btnSave) {
      btnSave = <Fab color="secondary" aria-label="Edit" className="btn-feb btn-feb-save" onClick={this.handleSave}>
        <CheckIcon />
      </Fab>
    }

    return (
      <div>
        <Message {...this.state.snackbar} onClose={this.handleClose} />
        <Fab color="primary" aria-label="Add" className="btn-feb btn-feb-create" onClick={this.handleCreate}>
          <AddIcon />
        </Fab>
        {btnSave}
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
