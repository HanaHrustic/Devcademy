import { Button, FormControl, Grid, TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import classes from './ReservationForm.module.css'

const ReservationForm = () => {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(name, email, number, checkIn, checkOut);
    }

    return (
        <Grid container direction="column" justifyContent="flex-start" alignItems="baseline">
            <form onSubmit={submitHandler}>
                <Grid item>
                    <TextField fullWidth margin="normal" label="Full Name" variant="outlined" 
                        value={name} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value);
                            }}/>
                </Grid>
                <Grid item>
                    <TextField fullWidth margin="normal" label="Email address" variant="outlined"
                        value={email} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(event.target.value);
                        }}/>
                </Grid>
                <Grid item>
                    <TextField fullWidth margin="normal" type="number" label="Number of guests" variant="outlined"
                        value={number} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setNumber(event.target.value);
                        }}/>
                </Grid>
                <Grid item>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="baseline">
                        <Grid item>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Check in"
                                    value={checkIn}
                                    onChange={(newValue) => {
                                        setCheckIn(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Check out"
                                    value={checkOut}
                                    onChange={(newValue) => {
                                        setCheckOut(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="baseline">
                        <Button type="submit" className={classes.reservation_form_button} variant="contained">BOOK YOUR STAY</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}

export default ReservationForm;