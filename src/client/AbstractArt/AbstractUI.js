import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AbstractSlider from '../UIComponents/AbstractSlider.js';
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
    abstractResolution: state.abstract.abstractResolution.value.values,
    abstractWidth: state.abstract.abstractWidth.value.values,
    abstractHeight: state.abstract.abstractHeight.value.values,
  };
};

class AbstractUI extends React.Component {
  render(){
    const { classes, abstractResolution, abstractWidth, abstractHeight } = this.props;

    return(
      <div className={classes.root}>
        <Typography className={classes.textStyle}>
          Resolution: {abstractResolution == null ? 2 : abstractResolution}
        </Typography>
        <AbstractSlider
          stateName={'abstractResolution'}
          domain={[2, 10]}
          defaultValues={abstractResolution == null ? [2] : [abstractResolution]}
        />
        <Typography className={classes.textStyle}>
          Art Width: {abstractWidth == null ? 400 : abstractWidth}
        </Typography>
        <AbstractSlider
          stateName={'abstractWidth'}
          domain={[200, 600]}
          defaultValues={abstractWidth == null ? [400] : [abstractWidth]}
        />
        <Typography className={classes.textStyle}>
          Art Height: {abstractHeight == null ? 400 : abstractHeight}
        </Typography>
        <AbstractSlider
          stateName={'abstractHeight'}
          domain={[200, 600]}
          defaultValues={abstractHeight == null ? [400] : [abstractHeight]}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(AbstractUI));
