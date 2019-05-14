import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter as Router, Link, Route, } from "react-router-dom";

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

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Router>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Note
          </Typography>
            <div style={{display: 'flex'}}>
            <Link to="/">Home</Link>
            <Link to="/signin/">SignIn</Link>
            <Link to="/signup/">SignUp</Link>
            </div>
        </Toolbar>
      </AppBar>
        <Route path="/" exact component={MyFirstGrid} />
        <Route path="/signin/" component={SignIn} />
        <Route path="/signup/" component={SignUp} />
      </Router>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);