import { Grid, Button, InputAdornment } from "@mui/material";
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';


import classes from './SimpleSearch.module.css'

const SimpleSearch = () => {
    const [destination, setDestination] = useState('');

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(destination);
    }

    return (
        <Grid item>
            <form onSubmit={submitHandler}>
                <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                    <Grid item>
                        <TextField className={classes["simple-search-select"]} select label="Where are you going?" value={destination} 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setDestination(event.target.value);
                            }} 
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><DirectionsCarIcon/></InputAdornment>,
                            }}
                        >
                            <MenuItem value={1}>London</MenuItem>
                            <MenuItem value={2}>New York</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item>
                        <Button className={classes["simple-search-button"]} type="submit" variant="contained">SEARCH</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}

export default SimpleSearch;