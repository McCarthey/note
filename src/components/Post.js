import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import request from '../utils/request'

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
    textAlign: 'center'
  },
  textarea: {
    overflow: "visible",
    height: 'calc(100vh - 80px)',
    fontSize: '18px',
    lineHeight: '1.5',
    padding: '16px',
    resize: 'none',
    border: 'none',
    outline: 'none'
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
    content: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleSave = async () => {
    console.log('clicked Save')
    const newItem = {
      id: (+new Date()).toString(),
      content: this.state.content,
      done: false,
    }
    try {
      await request.postJSON(`/create`, newItem)
      this.setState({ open: false, content: '' })
      this.props.onCreateSuccess(newItem) // 通知父组件创建成功
    } catch (e) {
      console.log(e)
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fab color="primary" aria-label="Add" className="btn-feb btn-feb-create" onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>

        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                新建笔记
              </Typography>
              <Button color="inherit" onClick={this.handleSave}>
                保存
              </Button>
            </Toolbar>
          </AppBar>
          <textarea className={classes.textarea} value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })} />
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FullScreenDialog);