import classes from './AccommodationSearch.module.css'

import TextField from '@mui/material/TextField';
import { Button, Grid, InputAdornment, MenuItem } from '@mui/material';
import { useState } from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AdvancedSearchControls from './AdvancedSearchControls';
import AccommodationByLocation from '../AccommodationByLocation';

const AccommodationSearch = (props: any) => {
    const [destination, setDestination] = useState('');

    const [number, setNumber] = useState('');
    const [typeOfAccommodation, setTypeOfAccommodation] = useState('');

    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(destination, checkIn, checkOut, number, typeOfAccommodation);
        props.onLinkClick(<AccommodationByLocation destination={destination}/>);
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid className={classes["accommodation-search"]} container direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item>
                    <TextField className={classes["accommodation-select"]} select label="Where are you going?" value={destination} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDestination(event.target.value);
                        }} 
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><DirectionsCarIcon/></InputAdornment>,
                        }}
                    >
                        <MenuItem value={"London"}>London</MenuItem>
                        <MenuItem value={"New York"}>New York</MenuItem>
                        <MenuItem value={"Mýkonos City"}>Mýkonos City</MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <AdvancedSearchControls numberChange={setNumber} typeOfAccomodationChange={setTypeOfAccommodation} checkInChange={setCheckIn} checkOutChange={setCheckOut}/>
                </Grid>
                <Grid item>
                    <Button className={classes["accommodation-button"]} type="submit" variant="contained">SEARCH</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default AccommodationSearch;