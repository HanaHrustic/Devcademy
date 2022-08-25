import { Grid } from "@mui/material";
import AdvancedSearch from "./search/AdvancedSearch";

import classes from './Favorites.module.css';
import AccommodationCard from "./AccommodationCard";
import { Container } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";


const Favorites = () =>{
    const [typeOfAccommodation, setTypeOfAccommodation] = useState("");
    const [homes, setHomes] = useState<{id: string, title: string, type: string, categorization: number, imageUrl: string, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}}[]>([]);

    const fetchHomes = useCallback(async () => {
        fetch("https://devcademy.herokuapp.com/api/Accomodations")
            .then(response => {
                return response.json();
            }).then(data => {
                setHomes(data);
            });
    }, []);

    useEffect(() => {
        fetchHomes();
    }, []);

    const submitHandler = (type: string) => {
        setTypeOfAccommodation(type);
    }
    
    return (
        <Container>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Grid item>
                    <h1>Homes guests love</h1>
                </Grid>
                <AdvancedSearch formResult={submitHandler}/>
            </Grid>
            <Grid className={classes["favorites-section"]} container direction="row" justifyContent="flex-start" alignItems="flex-start">
                {homes.filter(home => typeOfAccommodation === "" || home.type === typeOfAccommodation).map((home) => (
                    <Grid className={classes["city-card"]} key={home.id} item>
                        <AccommodationCard home={home}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Favorites;