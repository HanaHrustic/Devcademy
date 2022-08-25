import './AccommodationSection.css'

import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import AccommodationCard from './AccommodationCard';
import Favorites from './Favorites';

import { useCallback, useEffect, useState } from "react";

const AccommodationSection: React.FC<{homes: {id: string, title: string, type: string, categorization: number, imageUrl: string, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}}[], onLinkClick(component: JSX.Element): void}> = (props) =>{
    return (
        <Container className='accommodation-section'>
            <Grid container direction="column" justifyContent="flex-start" alignItems="baseline">
                <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                    <Grid item>
                        <h3 className='accommodation-header'>Homes guests love</h3>
                    </Grid>   
                    <Grid item>
                        <Link to='favorites' className='all-homes-link' >VIEW ALL HOMES</Link>
                    </Grid>
                </Grid>
                <Grid className='accommodation-card' container direction="row" justifyContent="flex-start" alignItems="baseline">
                    {props.homes.slice(0, 4).map((home) => (
                        <AccommodationCard key={home.id} home={home}/>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default AccommodationSection;