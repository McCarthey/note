import React from 'react'
import request from '../utils/request'
import Message from './Message'

export default class SignIn extends React.Component {
    state = {
        snackbar: {
            open: false,
            message: '',
            type: '',
        }
    }

    handleClose = () => {
        this.setState({
            snackbar: {
                open: false,
                message: '',
                type: ''
            }
        })
    }

    async componentDidMount() {
        try {
            const res = await request.get('/test')
            console.log(res)
        } catch(e) {
            this.setState({
                snackbar: {
                    open: true,
                    message: e.msg,
                    type: 'error'
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Message {...this.state.snackbar} onClose={this.handleClose} />
                登录
            </div> 
        )
    }
} 