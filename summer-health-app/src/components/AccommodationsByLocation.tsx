import { Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
import classes from './AccommodationsByLocation.module.css'
import AccommodationCard from './AccommodationCard';
import AdvancedSearch from './Search/AdvancedSearch';

const AccommodationByLocation = (props: {destination: string}) => {
    const accommodations: {title: string, location: string, price: number, categorization: number, imageUrl: string}[] = require('../data/accommodations.json')
        .filter((accommodation: {title: string, location: string, price: number, categorization: number, imageUrl: string}) => 
            accommodation.location === props.destination)
        .map((accommodation: {title: string, location: string, price: number, categorization: number, imageUrl: string}) => 
            {
            return {...accommodation, imageUrl:require(`../assets/${accommodation.imageUrl}`)};
            }
        );
    
    return (
        <Container className={classes["wrapper"]}>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <h1 className={classes["title"]}>Stays in {props.destination}</h1>
                <p className={classes["subtitle"]}>{accommodations.length} {accommodations.length > 1 ? "properties" : "property"} </p>
                <AdvancedSearch/>
                <Grid container direction="row" justifyContent="flex-start" alignItems="baseline">
                    {accommodations.map((accommodation) => (
                        <AccommodationCard home={accommodation}/>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default AccommodationByLocation;