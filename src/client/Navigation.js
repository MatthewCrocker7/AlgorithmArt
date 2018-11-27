import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import MazeGenerator from './Mazes/MazeGenerator.js';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3}}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: '100vh',
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
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
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class Navigation extends React.Component {
  state = { value: 0 };

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
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          centered
        >
          <Tab
            label="Maze Generator"
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          />
          <Tab
            label="Abstract Color"
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          />
          <Tab
            label="Item Three"
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          />
          <Tab
            label="Item Four"
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          />
        </Tabs>
        {value === 0 && <MazeGenerator />}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item three</TabContainer>}
        {value === 3 && <TabContainer>Item four</TabContainer>}
      </div>
    );
  }
}

Navigation.propTypes = {classes: PropTypes.object.isRequired};

export default withStyles(styles)(Navigation);
