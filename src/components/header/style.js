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
      paddingRight: '40px', 
      fontSize: 15
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
    filter1: {
      marginLeft: 90,
      padding: 25,
      background: '#424242',
      fontSize: '15'
    },
}));

export default styles;
