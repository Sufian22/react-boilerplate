import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 500,
    margin: theme.spacing.unit * 2,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
    height: 250,
  },
});

const api_image_base_url = 'https://image.tmdb.org/t/p/w500';

class MovieCard extends Component {
  render() {
    const { classes, movie, key } = this.props;
    const { release_date, title, backdrop_path, overview } = movie;
    let date = new Date(release_date);
    return (
      <Card key={key} className={classes.card}>
        <CardActionArea>
          <CardHeader title={title} subheader={date.toDateString()} />
          <CardMedia
            className={classes.media}
            image={api_image_base_url + backdrop_path}
          />
          <CardContent>
            <Typography component="p">{overview}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(MovieCard);
