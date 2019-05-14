import React from 'react'
import request from '../utils/request'
import Message from './Message'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class SignIn extends React.Component {
    state = {
        username: '',
        password: '',
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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    handleLogin = async () => {
        const {username, password} = this.state
        if(!username || !password) {
            this.setState({
                snackbar: {
                    open: true,
                    message: '请填写用户名和密码',
                    type: 'warning'
                }
            })
        }
        try {
            await request.postJSON('/login', {
                username,
                password
            })
            this.setState({
                snackbar: {
                    open: true,
                    message: '登录成功',
                    type: 'success'
                }
            },() => {
                setTimeout(() => {
                    this.props.history.push('/');
                    window.location.reload() 
                }, 1000)
            })
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
                <div className="sign"> 
                    <TextField
                        id="username"
                        label="用户名"
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="password"
                        label="密码"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained" size="large" color="primary" onClick={this.handleLogin}>登录</Button>
                </div>
            </div> 
        )
    }
} 