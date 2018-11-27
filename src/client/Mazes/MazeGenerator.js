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
import MainMazeControls from './MainMazeControls.js';

const styles = theme => ({
  container: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
    wrap: 'wrap',
  },
  item: {
    boxSizing: 'border-box',
    border: 1,
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  button: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
  text: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
  controlsUI: {
    height: '100vh',
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  fullGridUI: {
    height: '100%',
    margin: theme.spacing.unit,
  },
});

class MazeGenerator extends React.Component {

  render() {
      const { classes } = this.props;
      return(
        <div className={classes.fullGridUI}>
          <Grid container spacing={24}>
            <Grid item xs={3} zeroMinWidth className={classes.controlsUI}>
              <MainMazeControls />
              <Divider className={classes.divider} />
              <Typography className={classes.text}>Testinglmm. Wait a second, does this actually work now. I'm typing a long sentence to see. How long of a sentence can I actually make?</Typography>
              <Divider />
              <Typography className={classes.text}>Just another sentence</Typography>
            </Grid>
            <Grid item xs={9} zeroMinWidth className={classes.controlsUI}>
              <Typography className={classes.text}>sucking a big fat dick on occassion but sometimes i'm not relaly into it. it depends on my mood yuhhh. Okay is there anything else I can say?
              just trying to wrap some text here. blah blah blah blah. if anyone saw the things that i was typing would they think i'm weird? or would htey secretly think that wow i'm exactly the same way too this is a little bit more typing just to breing it too the next line</Typography>
            </Grid>
          </Grid>
        </div>
      );
  }
}
function MainUI(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" size="medium" color="primary" className={classes.button}>Generate maze</Button>
    </div>
  );
}
class UIControls extends React.Component {
  render() {
    const { classes } = this.props;
    return(
      <h1>test</h1>
    );
  }
}
class Maze extends React.Component {

}

MazeGenerator.propTypes = {classes: PropTypes.object.isRequired,};
UIControls.propTypes = {classes: PropTypes.object.isRequired,};
MainUI.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MazeGenerator);
