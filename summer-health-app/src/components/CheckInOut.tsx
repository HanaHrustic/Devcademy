import { Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from "react";

import classes from './CheckInOut.module.css';

const CheckInOut = (props: any) => {
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    const checkInChange = (newCheckInValue: Date | null): void => {
        setCheckIn(newCheckInValue);
        props.checkInChange(newCheckInValue);
    }

    const checkOutChange = (newCheckOutValue: Date | null): void => {
        setCheckOut(newCheckOutValue);
        props.checkOutChange(newCheckOutValue);
    }

    return (
        <Grid className={classes.checkInOut} container direction="row" justifyContent="flex-start" alignItems="center">
            <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Check in"
                        value={checkIn}
                        onChange={(newValue) => {
                            checkInChange(newValue);
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
                            checkOutChange(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Grid> 
        </Grid>
    );
}

export default CheckInOut;