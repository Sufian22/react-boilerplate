import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MovieFilter from '@material-ui/icons/MovieFilter';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: '#ffffff',
    marginRight: theme.spacing.unit * 5,
  },
  links: {
    '&:hover': {
      borderBottom: '3px solid #ea148c',
    },
    marginRight: theme.spacing.unit * 3,
    color: '#ffffff',
    textDecoration: 'none',
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
    color: '#ffffff',
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <MovieFilter className={classes.icon} />
        <Typography variant="h4" className={classes.title}>
          Movix
        </Typography>
        <Typography variant="h6">
          <Link to="/" className={classes.links}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/about" className={classes.links}>
            About
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
