import { makeStyles } from '@material-ui/styles'

const styles = makeStyles({
    midia: {
        width: 200,
        height: 200,
        paddingLeft: 50,
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        textDecoration: 'none'
      },
    atributsTit: {
    textAlign: 'left',
    padding: 10
    },
    atributsPri:{
    textAlign: 'left',
    height: 100,  
    paddingLeft: 11
    }
});

export default styles;