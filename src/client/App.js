import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import 'typeface-roboto';
import './app.css';
import NavBar from './UIComponents/NavBar.js';

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
        <NavBar />
      </div>
    );
  }
}
