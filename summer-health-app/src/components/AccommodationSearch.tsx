import classes from './AccommodationSearch.module.css'

import TextField from '@mui/material/TextField';
import { Button, Grid, InputAdornment, MenuItem } from '@mui/material';
import { useState } from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PersonIcon from '@mui/icons-material/Person';
import HotelIcon from '@mui/icons-material/Hotel';

const AccommodationSearch = (props: any) => {
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [number, setNumber] = useState('');
    const [typeOfAccommodation, setTypeOfAccommodation] = useState('');

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(destination, checkIn, checkOut, number, typeOfAccommodation);
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid className={classes.accommodation_search} container direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item>
                    <TextField className={classes.accommodation_select} select label="Where are you going?" value={destination} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDestination(event.target.value);
                        }} 
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><DirectionsCarIcon/></InputAdornment>,
                        }}
                    />
                </Grid>
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
                <Grid item>
                    <TextField type="number" label="How many people?" variant="outlined"
                        value={number} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setNumber(event.target.value);
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PersonIcon/></InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField className={classes.accommodation_select} select label="What type of accommodation?" value={typeOfAccommodation} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setTypeOfAccommodation(event.target.value);
                        }} 
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><HotelIcon/></InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item>
                    <Button className={classes.accommodation_button} type="submit" variant="contained">SEARCH</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default AccommodationSearch;