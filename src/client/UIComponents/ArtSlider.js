import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import { Slider, Rail, Handles, Tracks} from 'react-compound-slider';
import { Handle, Track } from './ArtSliderComponents.js';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {
  updateWallSize,
  updateMazeWidth,
  updateMazeHeight
} from '../../js/actions/actions.js';

const sliderStyle = {
  position: 'relative',
  width: '50%',
  height: 40,
  margin: 'auto',
  marginTop: 15,
};

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 14,
  borderRadius: 7,
  cursor: 'pointer',
  backgroundColor: 'rgb(155,155,155)',
};


const mapDispatchToProps = dispatch => {
  return {
    updateWallSize: wallSize => dispatch(updateWallSize(wallSize)),
    updateMazeWidth: width => dispatch(updateMazeWidth(width)),
    updateMazeHeight: width => dispatch(updateMazeHeight(width)),
  };
};

//const domain = [5, 25];
//const defaultValues = [10];

class ArtSlider extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      values: props.defaultValues.slice(),
      update: props.defaultValues.slice(),
    }
  }

  onUpdate = update => {
    this.setState({ update })
  }

  onChange = values => {
    this.setState({ values });
    {this.props.stateName == 'Wall Size' && this.props.updateWallSize({
      values
    })};
    {this.props.stateName == 'Maze Width' && this.props.updateMazeWidth({
      values
    })};
    {this.props.stateName == 'Maze Height' && this.props.updateMazeHeight({
      values
    })};
  }

  render() {
    const { state: { values, update }} = this;

    return(
      <div>
        <Slider
          mode={1}
          step={1}
          domain={this.props.domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => (
              <div style={railStyle} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={this.props.domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps}) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
    );
  }
}

const MazeSlider = connect(null, mapDispatchToProps)(ArtSlider);

export default MazeSlider;
