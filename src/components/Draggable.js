import React from 'react';
import produce from 'immer'
import QueueAnim from 'rc-queue-anim'
import _ from 'lodash/lang'
import { debounce } from 'lodash/function'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import DeleteIcon from '@material-ui/icons/Delete';

import Message from './Message'
import request from '../utils/request'
import EventBus from '../utils/evebt-bus.js'

import Post from './Post'
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
  position: 'relative',
  userSelect: "none",
  zIndex: '3',
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

const getListStyle = (isDraggingOver, isDragging) => ({
  boxSizing: 'border-box',
  maxHeight: isDragging ? 'calc(100vh - 64px - 64px)' : 'calc(100vh - 64px)',
  overflow: 'hidden auto',
  background: isDraggingOver ? "#e1f5fe" : "#fff",
  border: '1px solid #ddd',
  padding: grid,
  width: '100%',
  maxWidth: '480px',
  boxShadow: '0 4px 10px #ddd',
  margin: '0 auto',
});

const getDeleteAreaStyle = isDraggingOver => ({
  position: 'fixed',
  bottom: '0',
  textAlign: 'center',
  transition: '.3s',
  color: isDraggingOver ? '#fff' : '#e53935',
  background: isDraggingOver ? "#e53935" : "transparent",
  padding: grid,
  width: '100%',
  height: '48px',
  margin: '0 auto',
});

export default class Drag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      done: false,
      btnSave: false,
      deleteAreaShow: false,
      editItem: {
        id: '',
        content: '',
        done: false,
        index: null
      },
      snackbar: {
        open: false,
        message: '',
        type: '',
      },
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
  }

  handleChange = index => event => {
    const newValue = event.target.value
    this.setState(produce(draft => {
      draft.items[index].content = newValue
    }))
  }

  handleEdit = (item, index) => () => {
    console.log(item, index)
    this.setState({ editItem: { ...item, index } }, () => console.log(this.state.editItem))
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

  onDragStart() {
    this.setState({
      deleteAreaShow: true
    })
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    // console.log(result.destination.droppableId, this.state.items[result.source.index])
    if (result.destination.droppableId === 'deleteArea') { // 调用删除逻辑
      const itemToDelete = this.state.items[result.source.index]
      this.handleDelete(itemToDelete.id)()
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({ deleteAreaShow: false })

    if (_.isEqual(items, this.state.items)) return
    if (result.destination.droppableId === 'deleteArea') return

    this.setState({ items, btnSave: true });
  }

  handleToggle = (item, index) => debounce(() => {
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
  }, 200)

  handleUpdateSuccess = type => (newItem) => {
    if (type === 'create') {
      this.setState(produce(draft => {
        draft.items.unshift(newItem)
        draft.snackbar = {
          open: true,
          message: '创建成功',
          type: 'success',
        }
      }))
    } else if (type === 'edit') {
      this.setState(produce(draft => {
        draft.items[draft.items.findIndex(i => i.id === newItem.id)].content = newItem.content
        draft.snackbar = {
          open: true,
          message: '修改成功',
          type: 'success',
        }
      }))
    }
  }

  getNotes = async () => {
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
      if (e.code === 999) {
        localStorage.setItem('MC_NOTE_APP_LOGIN', '')
        this.props.history.push('/signin')
        return
      }
      this.setState({
        snackbar: {
          open: true,
          message: e.msg,
          type: 'error',
        },
      })
    }
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

  handleDelete = itemId => async () => {
    try {
      await request.postJSON(`/delete/${itemId}`)
      this.setState(produce(draft => {
        draft.snackbar = {
          open: true,
          message: '删除成功',
          type: 'success',
        }
        draft.items.splice(draft.items.findIndex(n => n.id === itemId), 1)
        draft.btnSave = false
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

  componentDidMount() {
    this.getNotes()
    EventBus.addListener('logout', () => {
      this.props.history.push('/signin')
    })
  }

  componentWillUnmount() {

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
              <div style={{ display: 'flex', }} >
                <IconButton onClick={this.handleToggle(item, index)} variant="contained" size="small" color={item.done ? 'secondary' : 'default'} style={{ minWidth: '40px' }}>
                  {item.done ? <CheckBoxIcon /> : <CheckBoxOutlineIcon />}
                </IconButton>
                <div className="text-multiline" style={item.done ? { textDecoration: 'line-through', color: '#ccc' } : {}} onClick={this.handleEdit(item, index)}><pre>{item.content ? item.content : <span style={{ color: '#ccc' }}>点击编辑</span>}</pre></div>
              </div>
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
        {btnSave}
        <Post onCreateSuccess={this.handleUpdateSuccess('create')} item={this.state.editItem} onEditSuccess={this.handleUpdateSuccess('edit')} />
        <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver, this.state.deleteAreaShow)}
              >
                <QueueAnim type={['right']}>
                  {content}
                  {provided.placeholder}
                </QueueAnim>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="deleteArea">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getDeleteAreaStyle(snapshot.isDraggingOver)}
              >
                {this.state.deleteAreaShow ? <DeleteIcon /> : ''}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}
