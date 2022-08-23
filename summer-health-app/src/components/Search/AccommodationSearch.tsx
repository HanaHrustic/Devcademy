import classes from './AccommodationSearch.module.css'

import TextField from '@mui/material/TextField';
import { Button, Grid, InputAdornment, MenuItem } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AdvancedSearchControls from './AdvancedSearchControls';
import AccommodationsByLocation from '../AccommodationsByLocation';

import { useCallback, useEffect, useState } from "react";
import { StringMappingType } from 'typescript';

const AccommodationSearch = (props: any) => {
    const [locations, setLocations] = useState<{id: string, name: string, imageUrl: string, postalCode: number, properties: number}[]>([]);

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

    const [destination, setDestination] = useState<{id: string, name: string}>();

    const [number, setNumber] = useState('');
    const [typeOfAccommodation, setTypeOfAccommodation] = useState('');

    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        props.onLinkClick(<AccommodationsByLocation destination={destination!} onLinkClick={changePage}/>);
    }

    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }

    const chooseLocation = (id: string) => {
        setDestination(locations.find(location => location.id === id));
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid className={classes["accommodation-search"]} container direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item>
                    <TextField className={classes["accommodation-select"]} select label="Where are you going?" value={destination} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            chooseLocation(event.target.value);
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