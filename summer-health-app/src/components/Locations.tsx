import { Grid } from "@mui/material";
import SimpleSearch from "./search/SimpleSearch";
import Container from 'react-bootstrap/Container';
import { useCallback, useEffect, useState } from "react";
import CityCard from "./CityCard";
import { useHistory } from 'react-router-dom';
import classes from './Locations.module.css'

function Locations (props:any){
    const [locations, setLocations] = useState<{id: string, name: string, imageUrl: string, postalCode: number, properties: number}[]>([]);
    const history = useHistory();

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

    const submitHandler = (id: string) => {
        history.push({
            pathname: "/accommodations/location?locationId=" + id,
            state: {name: locations.find(location => location.id === id)?.name}
        })
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