import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import HelpOutline from '@material-ui/icons/HelpOutline';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

class Footer extends React.Component {
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
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
        position="static"
      >
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<HomeOutlined />} />
        </Link>
        <Link to="/about">
          <BottomNavigationAction label="About" icon={<HelpOutline />} />
        </Link>
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
