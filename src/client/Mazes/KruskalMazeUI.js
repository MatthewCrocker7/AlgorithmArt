import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'wrap',
  },
});

class KruskalMazeUI extends React.Component {
  render() {
    return(
      <div>
        <h1>Testing this thing. KRUSKAL</h1>
      </div>
    );
  }
}

KruskalMazeUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KruskalMazeUI);
