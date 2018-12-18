import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Selector from '../UIComponents/Selector.js';
import MazeCanvas from './MazeCanvas.js';
import { connect } from 'react-redux';

const styles = theme => ({
  controlsUI: {
    borderRight: '1px solid #34568f',
    borderTop: '3px solid #34568f',
    borderBottom: '3px solid #34568f',
  },
  mazeContainer: {
    borderTop: '3px solid #34568f',
    borderBottom: '3px solid #34568f',
  },
  fullGridUI: {
    height: '100%',
    padding: theme.spacing.unit,
  },
});

const buttonStyle = {
  position: 'relative',
  margin: 'auto',
  width: '50%',
  backgroundColor: '#34568f',
};

const mapStateToProps = state => {
  return {
    mazeWallSize: state.maze.mazeWallSize.value.values,
    mazeWidth: state.maze.mazeWidth.value.values,
    mazeHeight: state.maze.mazeHeight.value.values,
  };
};

class MazeGenerator extends React.Component {
  constructor(){
    super();

    this.state = {
      wallSize: 10,
      rows: 50,
      cols: 50,
      mazeRef: setInitMazeState(50, 50),
    };
  }

  generateMaze = someNum => {
      fetch('/api/Mazes/recursiveMaze', {
        method: 'POST',
        body: JSON.stringify({
          mazeWallSize: this.props.mazeWallSize,
          mazeWidth: this.props.mazeWidth,
          mazeHeight: this.props.mazeHeight,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(user => this.setState({
          wallSize: user.wallSize,
          mazeRef: user.mazeRef,
        }));
  }

  render() {
      const { classes } = this.props;
      const { wallSize, rows, cols, mazeRef } = this.state;

      return(
        <div className={classes.fullGridUI}>
          <Grid container spacing={24}>
            <Grid item xs={3} zeroMinWidth className={classes.controlsUI}>
              <Button onClick={this.generateMaze} variant="contained" size="medium" color="primary" style={buttonStyle}>Generate maze</Button>
              <Selector />
            </Grid>
            <Grid item xs={9} zeroMinWidth className={classes.mazeContainer}>
              <MazeCanvas
                mazeRef={mazeRef}
                wallSize={wallSize}
              />
            </Grid>
          </Grid>
        </div>
      );
  }
}
export function MainUI(props) {
  return (
    <div>
      <Button variant="contained" size="medium" color="primary" style={buttonStyle}>Generate maze</Button>
      <Selector />
    </div>
  );
}

function setInitMazeState(rows, cols){
  var temp = new Array(rows);

  for(var x = 0; x < rows; x++){
    temp[x] = new Array(cols);
    for(var y = 0; y < cols; y++){
    //  if(Math.random() < 0.5){
        temp[x][y] = 1;
    //  }
    }
  }

  return temp;
}


MazeGenerator.propTypes = {classes: PropTypes.object.isRequired,};

export default connect(mapStateToProps)(withStyles(styles)(MazeGenerator));
