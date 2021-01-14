import React from 'react';
import styles from './style';
import Container from '@material-ui/core/Container';
import Header from '../../components/header'
import Footer from '../../components/footer'

function Login() {

const classes = styles();

return (
    <div>
        <Header />
        <Container maxWidth="xs">
            <div className={classes.root}>

            </div>
        </Container>
        <Footer/>
    </div>
    )
}

export default Login;