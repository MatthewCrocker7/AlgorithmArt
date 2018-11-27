import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import ArtSlider from './ArtSlider.js';
import Example from './Example.js';

const styles = theme => ({
  root: {
    display: 'wrap',
  },
  button: {
    position: 'relative',
    margin: theme.spacing.unit,
    width: '60%',
  },
});

class RecursiveMazeUI extends React.Component {
  render() {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <h1>testing</h1>
        <Button variant="contained" size="medium" color="primary" className={classes.button}>Generate maze</Button>
        <Example />
        <ArtSlider />
      </div>
    );
  }
}

RecursiveMazeUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecursiveMazeUI);
