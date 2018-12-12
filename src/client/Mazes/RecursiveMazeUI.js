import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArtSlider from '../UIComponents/ArtSlider.js';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    display: 'wrap',
  },
  textStyle: {
    color: '#34568f',
    fontWeight: theme.typography.fontWeightRegular * 2,
  }
});

const mapStateToProps = state => {
  return { mazeWallSize: state.mazeWallSize };
};

class RecursiveMazeUI extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      wallSize: 10,
    };
  }


  render() {
    const { classes } = this.props;
    const { wallSize } = this.state;

    return(
      <div className={classes.root}>
        <Typography className={classes.textStyle}>
          Wall Size: 10
        </Typography>
        <ArtSlider
          stateName={'Wall Size'}
          domain={[5, 25]}
          defaultValues={[10]}
        />
        <Typography className={classes.textStyle}>
          Maze Width: 500
        </Typography>
        <ArtSlider
          stateName={'Maze Width'}
          domain={[500, 1000]}
          defaultValues={[500]}
        />
        <Typography className={classes.textStyle}>
          Maze Height: 500
        </Typography>
        <ArtSlider
          stateName={'Maze Height'}
          domain={[500, 1000]}
          defaultValues={[500]}
        />
      </div>
    );
  }
}

RecursiveMazeUI.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(RecursiveMazeUI);
