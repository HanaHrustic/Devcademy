import { Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from "react";

import classes from './Calendar.module.css';

const Calendar = (props: {label: string, value: Date | null, onChangeHandler: (newValue: Date | null) => void}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label={props.label}
                value={props.value}
                onChange={(newValue) => {
                    props.onChangeHandler(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

export default Calendar;