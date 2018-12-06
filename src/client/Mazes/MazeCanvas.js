import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Konva from 'konva';
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
  constructor(props){
    super(props);
  }

  render() {
    const { classes, mazeRef} = this.props;

    //Render the maze
    return (
      <div className={classes.root}>
        <Stage width={width} height={height}>
          <CreateMaze
            wallSize={this.props.wallSize}
            mazeRef={mazeRef}
          />
        </Stage>
      </div>
    );
  }
}

export function CreateMaze(props){
  //pass props from MazeCanvas to here, which will send it to the server
  var maze = new Array(props.mazeRef.length);

  for(var r = 0; r < props.mazeRef.length; r++){
    maze[r] = new Array(props.mazeRef[r].length);

    for(var c = 0; c < props.mazeRef[r].length; c++){
      var fill = '#FFFFFF'; //Add option to set this in UI

      if(props.mazeRef[r][c] == 1){
        fill='#34568f';
      }
      maze[r].push(
        <Rect
          x={c * props.wallSize}
          y={r * props.wallSize}
          width={props.wallSize}
          height={props.wallSize}
          fill={fill}
          shadowBlur={0}
        />
      )
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
