import classes from './AdvancedSearchControls.module.css'

import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import HotelIcon from '@mui/icons-material/Hotel';
import { useState } from 'react';
import { Grid, InputAdornment, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import CheckInOut from './CheckInOut';

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
            <Grid className={classes.advanced_search} container direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid item>
                    <CheckInOut checkInChange={checkInChange} checkOutChange={checkOutChange}/>
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
                    <TextField className={classes.advanced_search_select} select label="What type of accommodation?" value={typeOfAccommodation} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            typeOfAccomodationChange(event.target.value);
                        }} 
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><HotelIcon/></InputAdornment>,
                        }}
                    >
                        <MenuItem value={1}>House</MenuItem>
                        <MenuItem value={2}>Apartment</MenuItem>
                    </TextField>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AdvancedSearchControls;