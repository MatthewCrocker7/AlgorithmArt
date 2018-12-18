import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import AbstractUI from './AbstractUI.js';
import AbstractSlider from '../UIComponents/AbstractSlider.js';
import AbstractCanvas from './AbstractCanvas.js';
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
  buttonStyle: {
    position: 'relative',
    margin: 'auto',
    marginBottom: theme.spacing.unit,
    width: '50%',
    backgroundColor: '#34568f',
  },
});

const mapStateToProps = state => {
  return {
    abstractResolution: state.abstract.abstractResolution.value.values,
  };
};


class AbstractGenerator extends React.Component {
  constructor(){
    super();

    this.state = {
      resolution: 2,
      abstractRef: 0,
    };
  }

  generateAbstract = someNum => {
      fetch('/api/AbstractArt/First', {
        method: 'POST',
        body: JSON.stringify({
          abstractResolution: this.props.abstractResolution,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(user => this.setState({
          resolution: user.abstractResolution,
          abstractRef: user.abstractRef,
        }));
  }

  render() {
      const { classes } = this.props;
      const { resolution, abstractRef } = this.state;

      return(
        <div className={classes.fullGridUI}>
          <Grid container spacing={24}>
            <Grid item xs={3} zeroMinWidth className={classes.controlsUI}>
              <Button onClick={this.generateAbstract} variant="contained" size="medium" color="primary" className={classes.buttonStyle}>Create Art</Button>
              <AbstractUI />
            </Grid>
            <Grid item xs={9} zeroMinWidth className={classes.mazeContainer}>
              <AbstractCanvas
                resolution={resolution}
                abstractRef={abstractRef}
              />
            </Grid>
          </Grid>
        </div>
      );
  }
}

AbstractGenerator.propTypes = {classes: PropTypes.object.isRequired,};

export default connect(mapStateToProps)(withStyles(styles)(AbstractGenerator));
