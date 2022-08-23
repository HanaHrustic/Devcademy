import classes from './AdvancedSearchControls.module.css'

import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import HotelIcon from '@mui/icons-material/Hotel';
import { useState } from 'react';
import { Grid, InputAdornment, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Calendar from '../Calendar';

const AdvancedSearchControls = (props: any) => {
    const [number, setNumber] = useState('');
    const [typeOfAccommodation, setTypeOfAccommodation] = useState('');
    
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    const numberChange = (newNumberValue: string): void => {
        setNumber(newNumberValue);
        props.numberChange(newNumberValue);
    }

    const typeOfAccomodationChange = (newtypeOfAccomodationValue: string): void => {
        setTypeOfAccommodation(newtypeOfAccomodationValue);
        props.typeOfAccomodationChange(newtypeOfAccomodationValue);
    }

    const checkInChange = (newCheckInValue: Date | null): void => {
        setCheckIn(newCheckInValue);
        props.checkInChange(newCheckInValue);
    }

    const checkOutChange = (newCheckOutValue: Date | null): void => {
        setCheckOut(newCheckOutValue);
        props.checkOutChange(newCheckOutValue);
    }


    return (
        <Grid item>
            <Grid className={classes["advanced-search"]} container direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid item>
                    <Calendar label='Check In' value={checkIn} onChangeHandler={checkInChange}/>
                </Grid>
                <Grid item>
                    <Calendar label='Check Out' value={checkOut} onChangeHandler={checkOutChange}/>
                </Grid>
                <Grid item>
                    <TextField type="number" label="How many people?" variant="outlined"
                        value={number} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            numberChange(event.target.value);
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PersonIcon/></InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField className={classes["advanced-search-select"]} select label="What type of accommodation?" value={typeOfAccommodation} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            typeOfAccomodationChange(event.target.value);
                        }} 
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><HotelIcon/></InputAdornment>,
                        }}
                    >
                        <MenuItem value={"House"}>House</MenuItem>
                        <MenuItem value={"Apartment"}>Apartment</MenuItem>
                        <MenuItem value={"Mobile Home"}>Mobile Home</MenuItem>
                    </TextField>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AdvancedSearchControls;