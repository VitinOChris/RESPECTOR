import { makeStyles } from '@material-ui/core'

const styles = makeStyles(() => ({
    root: {
        background:'grey', 
        height:180,
        width:'80%',
        marginTop:'50%',
        marginBottom: 518,
        borderRadius: 5,
        display: 'flex',
    },
    foot: {
        background: 'red'
    }
}))

export default styles;