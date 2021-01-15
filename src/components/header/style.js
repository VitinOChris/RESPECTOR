import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(() => ({
    root: {
      backgroundColor: '#424242',
      padding: '0px 0px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      boxShadow: '10px 5px 5px rgb(202,199,199)',
    },
    menuButton: {
      marginRight: '16px',
    },
    title: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 100
    },
    icons: {
      fontSize: 15,
      marginLeft: '715%'
    },
    merc:{
      marginLeft: '55%'
    },
    appBar: {
      zIndex: 1210
    },
    typograft: {
      color: 'inherit'
    },
    logo: {
      height: 60,
      fontSize: '250%',
      background: '#424242',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      textDecoration: 'none',
      outline: 'none'
    },
    categorys: {
      marginLeft: 115,
      fontSize: '1rem',
      fontFamily: 'Arial',
      },
    typCar: {
      fontSize: '1.25rem',
      fontFamily: 'sans-serif',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
      textAlign: 'center',
      padding: 20
    },
    carrinho: {
      paddingBottom: 50
    },
    contBuy: {
      marginTop: 25,
      marginLeft: 200,
      borderRadius: 200,
      height: 75,
      width: 300
    }
}));

export default styles;
