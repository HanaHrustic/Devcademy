import classes from './Login.module.css';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import useInput from '../hooks/use-input';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';

const Login = () => {
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler
    } = useInput("", (value: string) => value.trim() !== "");

    const {
        value: password,
        isValid: passwordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler
    } = useInput("", (value: string) => value.trim() !== "");

    const isFormValid = () => {
        return emailIsValid && passwordIsValid && checked;
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
        const token = generateToken();
        authCtx.login(token);
        history.replace('/home');
    }

    const generateToken = () => {
        return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
    }

    return (
        <div className={classes["background"]}>
            <Grid className={classes["login-wrapper"]} container direction="row" justifyContent="center" alignItems="center">
                <Grid className={classes["login"]} container direction="column" justifyContent="space-around" alignItems="flex-start">
                    <Container>
                        <Grid container direction="column" justifyContent="space-around" alignItems="center">
                            <form className={classes["form"]} onSubmit={submitHandler}>
                                <h3>Log in</h3>
                                <p>Get started for free</p>
                                <TextField 
                                    error={emailInputHasError} 
                                    value={email} 
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        emailChangeHandler(event.target.value);
                                    }}
                                    onBlur={emailBlurHandler}
                                    helperText={emailInputHasError ? "Mandatory field." : null}
                                    label="Email" 
                                    variant="outlined" 
                                    fullWidth/>
                                <TextField 
                                    error={passwordInputHasError} 
                                    value={password} 
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        passwordChangeHandler(event.target.value);
                                    }}
                                    onBlur={passwordBlurHandler}
                                    helperText={emailInputHasError ? "Mandatory field." : null}
                                    label="Password" 
                                    variant="outlined" 
                                    fullWidth/>
                                <FormGroup>
                                    <FormControlLabel control={
                                        <Checkbox  
                                            checked={checked}
                                            onChange={handleChange}/>
                                    } label="I accept the Terms and Conditions" />
                                </FormGroup>
                                <Button disabled={!isFormValid()} type="submit" className={classes["button"]} variant="contained" size="large">LOG IN</Button>
                            </form>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;