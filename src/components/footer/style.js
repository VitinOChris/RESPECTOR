import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  fixarRodape: {
    background: 'rgb(66,66,66)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    width: '100%'
  },
  root: {
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    color: 'white',
    fontSize: 18
  },
  typography: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  insta: {
      padding: 5
  },
  face: {
      paddingRight: 5
  }
}));

export default styles;