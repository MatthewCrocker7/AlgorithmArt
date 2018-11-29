import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import RecursiveMazeUI from '../Mazes/RecursiveMazeUI.js';
import KruskalMazeUI from '../Mazes/KruskalMazeUI.js';

const styles = theme => ({
  root: {
      margin: 'auto',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '50%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Selector extends React.Component {
  state = {
    algorithm: '',
    name: 'hai',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { algorithm } = this.state;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="algorithm-native-simple">Maze Algorithm</InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange('algorithm')}
            inputProps={{
              name: 'algorithm',
              id: 'algorithm-native-simple',
            }}
          >
            <option value="" />
            <option value={1}>Recursive Maze</option>
            <option value={2}>Kruskal's Maze</option>
            <option value={3}>Prim's Maze</option>
            <option value={4}>Something</option>
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

Selector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Selector);
