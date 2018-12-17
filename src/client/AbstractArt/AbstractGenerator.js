import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'typeface-roboto';
import Selector from '../UIComponents/Selector.js';
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
});

const buttonStyle = {
  position: 'relative',
  margin: 'auto',
  width: '50%',
  backgroundColor: '#34568f',
};

const mapStateToProps = state => {
  return {
    mazeWallSize: state.mazeWallSize.value.values,
    mazeWidth: state.mazeWidth.value.values,
    mazeHeight: state.mazeHeight.value.values,
  };
};

class AbstractGenerator extends React.Component {
  constructor(){
    super();

    this.state = {
      wallSize: 10,
      rows: 50,
      cols: 50,
      abstractRef: 0,
    };
  }

  generateAbstract = someNum => {
      fetch('/api/AbstractArt/First')
        .then(res => res.json())
        .then(user => this.setState({
          abstractRef: user.abstractRef,
        }));
  }

  render() {
      const { classes } = this.props;
      const { wallSize, rows, cols, abstractRef } = this.state;

      return(
        <div className={classes.fullGridUI}>
          <Grid container spacing={24}>
            <Grid item xs={3} zeroMinWidth className={classes.controlsUI}>
              <Button onClick={this.generateAbstract} variant="contained" size="medium" color="primary" style={buttonStyle}>Create Art</Button>
              <Selector />
            </Grid>
            <Grid item xs={9} zeroMinWidth className={classes.mazeContainer}>
              <AbstractCanvas
                abstractRef={abstractRef}
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



AbstractGenerator.propTypes = {classes: PropTypes.object.isRequired,};

export default connect(mapStateToProps)(withStyles(styles)(AbstractGenerator));
