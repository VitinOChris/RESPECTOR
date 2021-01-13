import React from 'react';
import styles from './style';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Header from '../../components/header';

function Register() {

const classes = styles();
const currencies = [
    {
        value: "sexoM",
        label: "Masculino"
    },
    {
    value: "sexoF",
    label: "Feminino"
    }
];
const [currency, setCurrency] = React.useState('sexo')

const handleChange = (event) => {
    setCurrency(event.target.value);
};

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
                        id="name"
                        label="Nome"
                        name="name"
                        type="name"/>

                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="surname"
                        label="Sobrenome"
                        name="surname"
                        type="surname"/>

                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
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

                    <TextField className={classes.yourSex}
                        id="select-your-sex"
                        select
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                        native: true,
                        }}
                        variant="outlined"
                        >
                        {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                    </TextField>

                    <Link href="/" underline='none'> <input type="button" value="JUNTE-SE A NÓS" className={classes.buttonLog}/>
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