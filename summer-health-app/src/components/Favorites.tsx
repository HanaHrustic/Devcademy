import { Grid } from "@mui/material";
import AdvancedSearch from "./search/AdvancedSearch";

import classes from './Favorites.module.css';
import AccommodationCard from "./AccommodationCard";
import { Container } from "react-bootstrap";
import { useState } from "react";


const Favorites: React.FC<{homes: {id: string, title: string, type: string, categorization: number, imageUrl: string, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}}[], onLinkClick(component: JSX.Element): void}> = (props) =>{
    const [typeOfAccommodation, setTypeOfAccommodation] = useState("");
    
    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }

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
                {props.homes.filter(home => typeOfAccommodation === "" || home.type === typeOfAccommodation).map((home) => (
                    <Grid className={classes["city-card"]} key={home.id} item>
                        <AccommodationCard home={home} onLinkClick={changePage}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Favorites;