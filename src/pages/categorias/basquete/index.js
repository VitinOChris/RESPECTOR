import React, { useState, useEffect} from 'react';
import styles from './style';
import Header from '../../../components/header';
import api from '../../../services/api';
import Footer from '../../../components/footer';
import Card from '../../../components/card';
import Grid from '@material-ui/core/Grid';


function Basquete() {
const [products, setProducts] = useState([]);
const getData = async () => {
    const resp = await api.get('/products');
    const data = await resp.data

    setProducts(data);
}

useEffect(() =>{
    getData();

},[])
const classes = styles();

return (
    <div className={classes.root}>
       <Header/>
       <Grid container justify="center" spacing={3}>
          {products.map((value) => (
            <Grid key={value} item>
              <Card 
                title={value.title}
                price={value.price}
                picture={value.picture}
              />
            </Grid>
          ))}
        </Grid>
        <Footer />
      </div>
    );
}
export default Basquete;
