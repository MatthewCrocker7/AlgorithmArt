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
    backgroundColor: '#34568f',
  },
});

//const width = 1000;
//const height = 300;
const mapStateToProps = state => {
  return {
    abstractWidth: state.abstract.abstractWidth.value.values,
    abstractHeight: state.abstract.abstractHeight.value.values,
  };
};

class AbstractCanvas extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes, abstractRef, abstractWidth, abstractHeight, resolution} = this.props;

    //Render the maze
    return (
      <div className={classes.root}>
        <Stage
          width={abstractWidth == null ? 400 : abstractWidth[0]}
          height={abstractHeight == null ? 400 : abstractHeight[0]}>
          <CreateAbstract
            resolution={resolution}
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
          width={400}
          height={400}
          fill={'#000000'}
        />
      </Layer>
    )
  }

  var pixelSize = props.resolution;
  var rows = 400/pixelSize;
  var cols = 400/pixelSize;

  var abstract = new Array(rows);

  for(var r = 0; r < rows; r++){
    abstract[r] = new Array(cols);

    for(var c = 0; c < cols; c++){
      var fill = '#' + Math.random().toString(16).slice(2, 8);
      //var fill = '#000000';
      abstract[r].push(
        <Rect
          x={c * props.resolution}
          y={r * props.resolution}
          width={props.resolution}
          height={props.resolution}
          fill={fill}
          shadowBlur={0}
          key={r + '_' + c}
        />
      )
    }
  }
  return(
    <Layer>
      {abstract}
    </Layer>
  );
}


AbstractCanvas.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AbstractOutput = connect(mapStateToProps)(AbstractCanvas);

export default withStyles(styles)(AbstractOutput);
