import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import { Slider, Rail, Handles, Tracks} from 'react-compound-slider';
import { Handle, Track } from './ArtSliderComponents.js';
import Typography from '@material-ui/core/Typography';

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


const domain = [5, 25];
const defaultValues = [10];

class ArtSlider extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      values: defaultValues.slice(),
      update: defaultValues.slice(),
    }
  }



  onUpdate = update => {
    this.setState({ update })
  }

  onChange = values => {
    this.props.onValueChange({ values });
    this.setState({ values: values });
  }

  render() {
    const { state: { values, update }} = this

    return(
      <div>
        <h1>{values}</h1>
        <h1>{update}</h1>
        <Slider
          mode={1}
          step={1}
          domain={domain}
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
                    domain={domain}
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

export default ArtSlider
