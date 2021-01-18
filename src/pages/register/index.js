import React from 'react';
import styles from './style';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Header from '../../components/header';

function Register() {

const classes = styles();

return (
    <div>
        <Header />
                <Container maxWidth="xs">
                    <div className={classes.root}>
                        <div className={classes.cont1}>
                        <img src="https://www.logaster.com/blog/wp-content/uploads/2020/03/0008.png" alt="logo" className={classes.logo}/>
                        <Typography className={classes.typo}>
                            TORNE-SE UM MEMBRO DA RESPECTOR
                        </Typography>
                        </div>
        
                        <div className={classes.email}> 
                           
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Nome"
                                name="name"
                                type="name"
                                />
        
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Sobrenome"
                                type="surname"
                                />
        
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Email"
                                type="email"
                                />
        
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Senha"
                                type="password"
                                />

                            <Link href="/" underline='none'> <input type="submit" value="JUNTE-SE A NÓS" className={classes.buttonReg}/>
                            </Link>
                            <div className={classes.Link}>
                            <text> Já é um usuário ? </text>
                            <Link href="/login" underline='always' > Fazer login </Link>
                            </div>
                        </div>
                    </div>
                </Container>
    </div>
    )
}

export default Register;