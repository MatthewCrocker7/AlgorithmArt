import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import RecursiveMazeUI from './RecursiveMazeUI.js';
import KruskalMazeUI from './KruskalMazeUI.js';

const styles = theme => ({
  root: {
    position: 'relative',
    width: '100%',
    display: 'wrap',
  },
  button: {
    position: 'relative',
    margin: theme.spacing.unit,
    width: '60%',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '60%',
  },
  inputText: {
    width: '60%',
  },
});

class MainMazeControls extends React.Component {
  state = {
    algorithm: 0,
  };

  handleChange = (event, value) => {
    this.setState({algorithm: event.target.value});
  };

  render() {
      const { classes } = this.props;
      const { algorithm } = this.state;

      return(
        <div className={classes.root}>
          <Button variant="contained" size="medium" color="primary" className={classes.button}>Generate maze</Button>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="algorithm-native-simple" className={classes.inputText}>Maze Algorithm</InputLabel>
            <Select
              native
              value={this.state.algorithm}
              onChange={this.handleChange}
              inputProps={{
                name: 'algorithm',
                id: 'algorithm-native-simple',
              }}
            >
              <option value={0} />
              <option value={1}>Recursive Backtracker</option>
              <option value={2}>Kruskal Algorithm</option>
              <option value={3}>Prim's Algorithm</option>
              <option value={4}>Recursive Division</option>
            </Select>
          </FormControl>
          {algorithm == 1 && <RecursiveMazeUI />}
          {algorithm == 2 && <KruskalMazeUI />}
          {algorithm == 3 && <RecursiveMazeUI />}
          {algorithm == 4 && <RecursiveMazeUI />}
        </div>
      );
  }
}

MainMazeControls.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMazeControls);

//handleChange = name => event => {
//  this.setState({ [name]: event.target.value });
//};
