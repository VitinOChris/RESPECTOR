import React from 'react';
import styles from './style';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
import Header from '../../components/header'


function Login() {

const classes = styles();

return (
    <div className={classes.fundo}>
        <Header />
        <div >
        <Container maxWidth="xs">
            <div className={classes.root}>
                <div className={classes.cont1}>
                <img src="https://www.logaster.com/blog/wp-content/uploads/2020/03/0008.png" alt="logo" className={classes.logo}/>
                <Typography className={classes.typo}>
                    SUA CONTA PARA SABER TUDO SOBRE A RESPECTOR
                </Typography>
                </div>

                <div className={classes.email}> 
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Endereço de Email"
                        name="email"
                        type="email"/>

                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Senha"
                        name="password"
                        type="password"/>

                    <Link href="/" underline='none'> <input type="button" value="ENTRAR" className={classes.buttonLog}/>
                    </Link>
                    <div className={classes.Link}>
                    <text> Não está registrado ? </text>
                    <Link href="/register" underline='always' > Junte-se a nós </Link>
                    </div>
                </div>
            </div>
        </Container>
     </div>
    </div>
    )
}

export default Login;