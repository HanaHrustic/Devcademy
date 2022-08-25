import { Grid, Button, InputAdornment } from "@mui/material";
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuItem from '@mui/material/MenuItem';
import { useCallback, useEffect, useState } from "react";
import classes from './SimpleSearch.module.css'

const SimpleSearch = (props: any) => {
    const [locations, setLocations] = useState<{id: string, name: string, imageUrl: string, postalCode: number, properties: number}[]>([]);
    const [destination, setDestination] = useState('');

    const fetchLocations = useCallback(async () => {
        fetch("https://devcademy.herokuapp.com/api/Location")
            .then(response => {
                return response.json();
            }).then(data => {
                setLocations(data);
            });
    }, []);

    useEffect(() => {
        fetchLocations();
    }, []);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        props.formResult(destination)
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
                            {locations.map((location) => (
                                <MenuItem key={location.id} value={location.id}>{location?.name}</MenuItem>))
                            }
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