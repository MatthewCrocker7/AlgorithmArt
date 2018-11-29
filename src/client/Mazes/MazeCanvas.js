import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Konva from 'konva';
import ReactDOM from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const styles = theme => ({
  root: {
    display: 'wrap',
    width: width,
    height: height,
    margin: 'auto',
    border: '3px solid #34568f',
  },
});

const width = 500;
const height = 500;


class MazeCanvas extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Stage width={width} height={height}>
          <CreateMaze
            wallSize={25}
          />
        </Stage>
      </div>
    );
  }
}

export function CreateMaze(props){
  var maze = new Array(height/props.wallSize);

  for(var r = 0; r < height/props.wallSize; r++){
    maze[r] = new Array(width/props.wallSize);

    for(var c = 0; c < width/props.wallSize; c++){
      if(Math.random() < 0.5){
        maze[r].push(
          <Rect
            x={c * props.wallSize}
            y={r * props.wallSize}
            width={props.wallSize}
            height={props.wallSize}
            fill='#34568f'
            shadowBlur={0}
          />
        )
      }
    }
  }

  return(
    <Layer>
      {maze}
    </Layer>
  );
}

MazeCanvas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MazeCanvas);
