import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

const classes = {
    message:  {
        display: 'flex',
        alignItems: 'center',
    },
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: red[500],
    },
    info: {
        backgroundColor: blue[900],
    },
    warning: {
        backgroundColor: amber[700],
    },
}

const variantIcon = {
    success: <CheckCircleIcon />,
    warning: <WarningIcon />,
    error: <ErrorIcon />,
    info: <InfoIcon />,
  };

export default class Message extends React.Component {
    handleClose = () => {
        this.props.onClose()
    }

    render() {
        const {open ,message, type} = this.props
        return (
            <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
            autoHideDuration={3000}
            onClose={this.handleClose}
            open={open}
            >
                <SnackbarContent
                    style={classes[type]}
                    message={
                        <span id="client-snackbar" style={classes.message}>
                        {variantIcon[type]}
                        {message}
                        </span>
                    }
                    action={[
                        <IconButton
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={this.handleClose}
                        >
                          <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </Snackbar> 
        )
    }
}