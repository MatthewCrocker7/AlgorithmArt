import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'typeface-roboto';
import Selector from '../UIComponents/Selector.js';
import MazeCanvas from './MazeCanvas.js';


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

class MazeGenerator extends React.Component {

  render() {
      const { classes } = this.props;
      return(
        <div className={classes.fullGridUI}>
          <Grid container spacing={24}>
            <Grid item xs={3} zeroMinWidth className={classes.controlsUI}>
              <MainUI className={classes.button}/>
            </Grid>
            <Grid item xs={9} zeroMinWidth className={classes.mazeContainer}>
              <MazeCanvas />
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


MazeGenerator.propTypes = {classes: PropTypes.object.isRequired,};

export default withStyles(styles)(MazeGenerator);
