import {
  Card,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from './style';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import Link from '@material-ui/core/Link'

export default function ImgMediaCard({ title, price, picture }) {
  const classes = styles();

  return (
    <Paper 
    elevation={0}>
      <Card 
      raised
      className={classes.style}>
          <FormControlLabel className={classes.ControlLab}
            control={<Checkbox size='small' icon={<FavoriteBorder fontSize='small'/>} checkedIcon={<Favorite fontSize='small'/>} name="checkedH" />}/>
          <Link href="" 
          underline='none' 
          color='inherit'>
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
          </Link>

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
