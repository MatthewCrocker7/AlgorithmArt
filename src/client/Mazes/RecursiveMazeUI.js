import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import ArtSlider from '../UIComponents/ArtSlider.js';

const styles = theme => ({
  root: {
    display: 'wrap',
  },
  textStyle: {
    color: '#34568f',
    fontWeight: theme.typography.fontWeightRegular * 2,
  }
});

class RecursiveMazeUI extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      wallSize: 10,
    };
  }


  onWallChange = wallValue => {
    this.setState({wallSize: wallValue.value })
  };

  render() {
    const { classes } = this.props;
    const { wallSize } = this.state;

    return(
      <div className={classes.root}>
        <Typography className={classes.textStyle}>
          Wall Size: {wallSize}
        </Typography>
        <ArtSlider onValueChange={this.onWallChange}/>

      </div>
    );
  }
}

RecursiveMazeUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecursiveMazeUI);
