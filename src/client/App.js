import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import 'typeface-roboto';
import './app.css';
import Navigation from './Navigation.js';

export default class App extends React.Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}, welcome to Algorithm Art.`}</h1> : <h1>Loading.. please wait!</h1>}
        <Navigation />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1>This is only a test.</h1>
    );
  }
}

//@withStyles(styles)


//export default withStyles(styles)(App);
