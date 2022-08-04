import { Grid, Button, InputAdornment } from "@mui/material";
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useState } from "react";

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
                        <TextField className={classes.simple_search_select} select label="Where are you going?" value={destination} 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setDestination(event.target.value);
                            }} 
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><DirectionsCarIcon/></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Button className={classes.simple_search_button} type="submit" variant="contained">SEARCH</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}

export default SimpleSearch;