import React from 'react';
import request from '../utils/request'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { HashRouter as Router, Link, Route, } from "react-router-dom";

import SignIn from './SignIn'
import SignUp from './SignUp'
import MyFirstGrid from './Grid'


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component {
  state = {
    isLoggedIn: false
  }

  async componentDidMount() {
    try {
      await request.get('/checkLogin')
      this.setState({ isLoggedIn: true })
    } catch(e) {
      this.setState({ isLoggedIn: false })
    }
  }

  logout = async () => {
    try {
      await request.postJSON('/logout', {})
      this.setState({ isLoggedIn: false })
    } catch(e) {
      console.log(e)
    }
  }

  render (){
  const { classes } = this.props;
  let logEle
  if (this.state.isLoggedIn) {
    logEle = <div className="logout" onClick={this.logout}>退出登录</div>
  } else {
    logEle = <div className="link-wrapper">
      <Link to="/">Home</Link>
      <Link to="/signin/">SignIn</Link>
      <Link to="/signup/">SignUp</Link>
    </div>
  }
  return (
    <div className={classes.root}>
      <Router>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          </Typography>
          {logEle}
        </Toolbar>
      </AppBar>
        <Route path="/" exact component={MyFirstGrid} />
        <Route path="/signin/" component={SignIn} />
        <Route path="/signup/" component={SignUp} />
      </Router>
    </div>
  );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);