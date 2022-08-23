import { Grid } from "@mui/material";
import SimpleSearch from "./search/SimpleSearch";
import Container from 'react-bootstrap/Container';

import { useCallback, useEffect, useState } from "react";
import CityCard from "./CityCard";

import classes from './Locations.module.css'
import AccommodationsByLocation from "./AccommodationsByLocation";

function Locations (props:any){
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

    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }

    const submitHandler = (id: string) => {
        props.onLinkClick(<AccommodationsByLocation destination={locations.find(location => location.id === id)!} onLinkClick={changePage}/>);
    }

    return (
        <Container>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Grid item>
                    <h1>All locations</h1>
                </Grid>
                <SimpleSearch formResult={submitHandler}/>
            </Grid>
            <Grid className={classes["city-section"]} container direction="row" justifyContent="flex-start" alignItems="flex-start">
                {locations.map((location) => (
                    <Grid className={classes["city-card"]} key={location.id} item>
                        <CityCard city={location}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Locations;