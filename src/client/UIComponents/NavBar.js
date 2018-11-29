import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MazeGenerator from '../Mazes/MazeGenerator.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#34568f',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: '15%',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#34568f',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#34568f',
      fontWeight: theme.typography.fontWeightMedium*2,
    },
    '&:focus': {
      color: '#34568f',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class NavBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          centered
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Mazes"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Abstract Art"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Fractals"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Something Cool"
          />
        </Tabs>
        {value === 0 && <MazeGenerator />}
        {value === 1 && <MazeGenerator />}
        {value === 2 && <MazeGenerator />}
        {value === 3 && <MazeGenerator />}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
