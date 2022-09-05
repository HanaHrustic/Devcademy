import { Button, Grid, TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import classes from './ReservationForm.module.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useInput from '../hooks/use-input';
import { useHistory } from 'react-router-dom';

import { useCallback, useEffect, useState } from "react";

const ReservationForm: React.FC<{id: string}> = (props) => {
    const [accommodation, setAccommodation] = useState<{id: string, title: string, subtitle: string, description: string, shortDescription: string, type: string, categorization: number, personCount: number | null, imageUrl: string, freeCancelation: boolean, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}, capacity: number}>();
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);
    const [personCount, setPersonCount] = useState(0);
    const [confirmed, setConfirmed] = useState(true);

    const history = useHistory();

    const {
        value: name,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler
      } = useInput("", (value: string) => value.length <= 300);

      const {
        value: email,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler
      } = useInput("", (value: string) => value.length <= 100 && value.includes('@'));


    const fetchAccommodation = useCallback(async () => {
        fetch("https://devcademy.herokuapp.com/api/Accomodations/" + props.id)
            .then(response => {
                return response.json();
            }).then(data => {
                setAccommodation(data);
            });
    }, []);

    useEffect(() => {
        fetchAccommodation();
    }, []);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        fetch("https://devcademy.herokuapp.com/api/Reservation", {
                method: 'POST',
                body: JSON.stringify({email, accomodationId: props.id, checkIn, checkOut, personCount, confirmed}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => (
                history.push('/accommodations/' + props.id)
            ));
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const isFormValid = () => {
        return nameIsValid && emailIsValid;
    }

    return (
        <Grid container direction="column" justifyContent="flex-start" alignItems="baseline">
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle>
                    {"Confirm booking"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {accommodation?.title}<br/>
                        {personCount} {personCount != 1 ? "guests" : "guest"}<br/>
                        {(checkIn ? (checkIn.toLocaleDateString("en-GB", { year: 'numeric', month: 'short', day: 'numeric' })) : new Date().toString()) 
                        + " - " + 
                        (checkOut ? (checkOut.toLocaleDateString("en-GB", { year: 'numeric', month: 'short', day: 'numeric' })) : new Date().toString())}<br/>
                        {accommodation?.type}<br/>
                        {accommodation?.location?.name}<br/>
                        {"EUR"} {(accommodation?.price ?? 0)*(Date.parse(checkOut?.toString() ?? new Date().toString()) - Date.parse(checkIn?.toString() ?? new Date().toString()))/(1000*60*60*24)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CANCEL</Button>
                    <Button onClick={submitHandler} autoFocus>CONFIRM</Button>
                </DialogActions>
            </Dialog>
            <form onSubmit={submitHandler}>
                <Grid item>
                    <TextField error={nameInputHasError} fullWidth margin="normal" label="Full Name" variant="outlined" 
                        value={name} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            nameChangeHandler(event.target.value);
                        }}
                        onBlur={nameBlurHandler}
                        helperText={nameInputHasError ? "Maximum 300 characters." : null}
                    />
                </Grid>
                <Grid item>
                    <TextField error={emailInputHasError} fullWidth margin="normal" label="Email address" variant="outlined"
                        value={email} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            emailChangeHandler(event.target.value);
                        }}
                        onBlur={emailBlurHandler}
                        helperText={emailInputHasError ? "Maximum 100 characters and should include @." : null}
                    />
                </Grid>
                <Grid item>
                    <TextField fullWidth margin="normal" type="number" label="Number of guests" variant="outlined"
                        value={personCount} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPersonCount(parseInt(event.target.value));
                        }}
                    />
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
                        <Button disabled={!isFormValid()} onClick={handleClickOpen} className={classes["reservation-form-button"]} variant="contained">BOOK YOUR STAY</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}

export default ReservationForm;