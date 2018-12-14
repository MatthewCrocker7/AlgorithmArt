import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    display: 'inline-block',
    margin: 'auto',
    border: '3px solid #34568f',
  },
});

//const width = 1000;
//const height = 300;
const mapStateToProps = state => {
  return {
    mazeWidth: state.mazeWidth.value.values,
    mazeHeight: state.mazeHeight.value.values,
  };
};

class MazeCanvas extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes, mazeRef, mazeWidth, mazeHeight} = this.props;

    //Render the maze
    return (
      <div className={classes.root}>
        <Stage
          width={mazeWidth == null ? 500 : mazeWidth[0]}
          height={mazeHeight == null ? 500 : mazeHeight[0]}>
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

const MazeOutput = connect(mapStateToProps)(MazeCanvas);

export default withStyles(styles)(MazeOutput);
