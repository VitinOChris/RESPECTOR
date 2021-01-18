import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(() => ({
    root: {
        margin: 0,
    },
    cont1: {
        marginTop: '5rem',
    },
    typo: {
        fontSize: '1.25rem',
        fontFamily: 'sans-serif',
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
        textAlign: 'center'
    },
    logo: {
        alignItems: 'center',
        height: 100
    },
    buttonReg: {
        background: "#000",
        color: "white",
        border: '1px solid #000',
        borderRadius: 3, 
        cursor: 'pointer',
        display: 'block',
        fontSize: 15,
        margin: 'auto',
        height: 40,
        width: '100%',
        marginTop: 20
    },
    Link: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 17
    },
    yourSex: {
        marginLeft: '35%'
    }
}))

export default styles;