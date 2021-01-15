import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from './style'

export default function ImgMediaCard({ title, price, picture }) {
  const classes = styles();

  return (
    <Paper 
    elevation={0}>
      <Card className={classes.style}> 
          <CardActionArea>
            <CardMedia
              className={classes.midia}
              component="img"
              alt="card"
              image={picture}
            /> 
          <Typography className={classes.atributsTit}> {title} </Typography>
          <div >
          <Typography className={classes.atributsPri}> {price} </Typography>
          </div>
          </CardActionArea>
        <div
          style={{
            marginLeft: 10,
          }}
        >
        </div>
      </Card>
    </Paper>
  );
}

ImgMediaCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  picture: PropTypes.string,
};

ImgMediaCard.defaultProps = {
  title: '',
  price: '',
  picture: '',
};
