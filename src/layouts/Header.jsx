import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
      color: '#000000',
    },
    marginRight: theme.spacing.unit * 3,
    color: '#ffffff',
    textDecoration: 'none',
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Test App
          </Typography>
          <Typography variant="h6" className={classes.links}>
            <Link to="/" className={classes.links}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.links}>
            <Link to="/about" className={classes.links}>
              About
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
