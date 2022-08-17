import './AccommodationSection.css'

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import AccommodationCard from './AccommodationCard';
import Favorites from './Favorites';

import { useCallback, useEffect, useState } from "react";

const AccommodationSection: React.FC<{homes: {id: string, title: string, categorization: number, imageUrl: string, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}}[], onLinkClick(component: JSX.Element): void}> = (props) =>{
    const homesLinkClickHandler = () => {
        props.onLinkClick(<Favorites homes={props.homes} onLinkClick={changePage}/>);
    }

    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }
    
    return (
        <Container className='accommodation-section'>
            <Grid container direction="column" justifyContent="flex-start" alignItems="baseline">
                <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                    <Grid item>
                        <h3 className='accommodation-header'>Homes guests love</h3>
                    </Grid>   
                    <Grid item>
                        <Link className='all-homes-link' onClick={homesLinkClickHandler} underline="hover">VIEW ALL HOMES</Link>
                    </Grid>
                </Grid>
                <Grid className='accommodation-card' container direction="row" justifyContent="flex-start" alignItems="baseline">
                    {props.homes.slice(0, 4).map((home) => (
                        <AccommodationCard key={home.id} home={home} onLinkClick={changePage}/>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default AccommodationSection;