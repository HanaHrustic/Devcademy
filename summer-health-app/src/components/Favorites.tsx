import { Grid } from "@mui/material";
import AdvancedSearch from "./search/AdvancedSearch";

import classes from './Favorites.module.css';
import AccommodationCard from "./AccommodationCard";
import { Container } from "react-bootstrap";


const Favorites: React.FC<{homes: {id: string, title: string, categorization: number, imageUrl: string, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}}[], onLinkClick(component: JSX.Element): void}> = (props) =>{
    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }
    
    return (
        <Container>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Grid item>
                    <h1>Homes guests love</h1>
                </Grid>
                <AdvancedSearch/>
            </Grid>
            <Grid className={classes["favorites-section"]} container direction="row" justifyContent="flex-start" alignItems="flex-start">
                {props.homes.map((home) => (
                    <Grid className={classes["city-card"]} key={home.id} item>
                        <AccommodationCard home={home} onLinkClick={changePage}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Favorites;