import React from 'react';
import { Link, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import styles from './style';



export default function Footer() {
  const classes = styles();

  return (
    <div className={classes.fixarRodape}>
      <div className={classes.container}>
        <div className={classes.root}>
        <h1>RESPECTOR</h1>

        <Link
          href="https://www.instagram.com/vitor.slatt/"
          style={{
            textDecoration: 'none',
            color: 'white',
            marginLeft: 50,
          }}
        >
          <InstagramIcon className={classes.insta}/>
        </Link>

        <Link
          href="https://www.facebook.com/vitor.oliveiradesousa.5/"
          variant="outline"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <FacebookIcon />
        </Link>
        </div>    
      </div>
      <Typography className={classes.typography}>
      © 2021 Respector Corporation. Os preços, promoções, condições de pagamento, frete e produtos são válidos exclusivamente para compras realizadas via internet. 
      Imagens meramente ilustrativas.
      </Typography>
    </div>
  );
}
