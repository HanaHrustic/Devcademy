import { Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
import classes from './AccommodationsByLocation.module.css'
import AccommodationCard from './AccommodationCard';
import AdvancedSearch from './search/AdvancedSearch';
import { useCallback, useState, useEffect } from 'react';

const AccommodationByLocation = (props: {destination: {id: string, name: string}, onLinkClick(component: JSX.Element): void}) => {
    const [accommodations, setAccommodations] = useState<{id: string, title: string, type: string, categorization: number, imageUrl: string, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}}[]>([]);
    const [typeOfAccommodation, setTypeOfAccommodation] = useState("");

    const fetchAccommodations = useCallback(async () => {
        fetch("https://devcademy.herokuapp.com/api/Accomodations/location?locationId=" + props.destination.id)
            .then(response => {
                return response.json();
            }).then(data => {
                setAccommodations(data);
            });
    }, []);

    useEffect(() => {
        fetchAccommodations();
    }, []);

    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }   
    
    const submitHandler = (type: string) => {
        setTypeOfAccommodation(type);
    }
    
    return (
        <Container className={classes["wrapper"]}>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <h1 className={classes["title"]}>Stays in {props.destination.name}</h1>
                <p className={classes["subtitle"]}>{accommodations.length} {accommodations.length > 1 ? "properties" : "property"} </p>
                <AdvancedSearch formResult={submitHandler}/>
                <Grid container direction="row" justifyContent="flex-start" alignItems="baseline">
                    {accommodations.filter(home => typeOfAccommodation === "" || home.type === typeOfAccommodation).map((accommodation) => (
                        <AccommodationCard key={accommodation.id} home={accommodation} onLinkClick={changePage}/>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default AccommodationByLocation;