import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MazeSlider from '../UIComponents/MazeSlider.js';
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
  return {
    wallSize: state.mazeWallSize.value.values,
    mazeWidth: state.mazeWidth.value.values,
    mazeHeight: state.mazeHeight.value.values,
  };
};

class RecursiveMazeUI extends React.Component {

  render() {
    const { classes, wallSize, mazeWidth, mazeHeight } = this.props;

    return(
      <div className={classes.root}>
        <Typography className={classes.textStyle}>
          Wall Size: {wallSize == null ? 10 : wallSize}
        </Typography>
        <MazeSlider
          stateName={'mazeWallSize'}
          domain={[5, 25]}
          defaultValues={wallSize == null ? [10] : [wallSize]}
        />
        <Typography className={classes.textStyle}>
          Maze Width: {mazeWidth == null ? 500 : mazeWidth}
        </Typography>
        <MazeSlider
          stateName={'mazeWidth'}
          domain={[300, 1000]}
          defaultValues={mazeWidth == null ? [500] : [mazeWidth]}
        />
        <Typography className={classes.textStyle}>
          Maze Height: {mazeHeight == null ? [500] : [mazeHeight]}
        </Typography>
        <MazeSlider
          stateName={'mazeHeight'}
          domain={[300, 600]}
          defaultValues={mazeHeight == null ? [500] : [mazeHeight]}
        />
      </div>
    );
  }
}

RecursiveMazeUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(RecursiveMazeUI))
