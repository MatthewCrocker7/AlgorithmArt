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

class AbstractCanvas extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes, abstractRef, mazeWidth, mazeHeight} = this.props;

    //Render the maze
    return (
      <div className={classes.root}>
        <Stage
          width={mazeWidth == null ? 500 : mazeWidth[0]}
          height={mazeHeight == null ? 500 : mazeHeight[0]}>
          <CreateAbstract
            abstractRef={abstractRef}
          />
        </Stage>
      </div>
    );
  }
}
export function CreateAbstract(props){
  if(props.abstractRef == 0){
    return(
      <Layer>
        <Rect
          width={500}
          height={500}
          fill={'#000000'}
        />
      </Layer>
    )
  }
  var maze = new Array(250);

  for(var r = 0; r < 250; r++){
    maze[r] = new Array(250);

    for(var c = 0; c < 250; c++){
      var fill = '#' + Math.random().toString(16).slice(2, 8);
      //var fill = '#000000';
      maze[r].push(
        <Rect
          x={c*2}
          y={r*2}
          width={2}
          height={2}
          fill={fill}
          shadowBlur={0}
          key={r + '_' + c}
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

function nextColor(props){

}

export function CreateMaze(props){
  //pass props from MazeCanvas to here, which will send it to the server
  var maze = new Array(props.mazeRef.length);

  for(var r = 0; r < props.mazeRef.length; r++){
    maze[r] = new Array(props.mazeRef[r].length);

    for(var c = 0; c < props.mazeRef[r].length; c++){
      var fill = '#FFFFFF'; //Add option to set this in UI

      if(props.mazeRef[r][c] == 1){
        fill='#000080';
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

AbstractCanvas.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AbstractOutput = connect(mapStateToProps)(AbstractCanvas);

export default withStyles(styles)(AbstractOutput);
