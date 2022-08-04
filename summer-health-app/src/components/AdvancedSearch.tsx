import classes from './AdvancedSearch.module.css'

import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PersonIcon from '@mui/icons-material/Person';
import HotelIcon from '@mui/icons-material/Hotel';
import { useState } from 'react';
import { Grid, InputAdornment, Button } from '@mui/material';

const AdvancedSearch = () => {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [number, setNumber] = useState('');
    const [typeOfAccommodation, setTypeOfAccommodation] = useState('');

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(checkIn, checkOut, number, typeOfAccommodation);
    }

    return (
        <Grid item>
            <form onSubmit={submitHandler}>
                <Grid className={classes.advanced_search} container direction="row" justifyContent="flex-start" alignItems="flex-start">
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
                        <TextField className={classes.advanced_search_select} select label="What type of accommodation?" value={typeOfAccommodation} 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setTypeOfAccommodation(event.target.value);
                            }} 
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><HotelIcon/></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Button className={classes.advanced_search_button} type="submit" variant="contained">SEARCH</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}

export default AdvancedSearch;