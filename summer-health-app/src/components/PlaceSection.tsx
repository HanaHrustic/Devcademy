import classes from './PlaceSection.module.css'
import PlaceCard from './PlaceCard'
import { Link, Route } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import { Button } from '@mui/material';
import NewPlaceForm from './forms/NewPlaceForm';

const PlaceSection: React.FC<{homes: {id: string, title: string, subtitle: string, description: string, shortDescription: string, type: string, categorization: number, personCount: number | null, imageUrl: string, freeCancelation: boolean, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number} | null, capacity: number}[]}> = (props) => {
    return (
        <Container>
            <Grid className={classes['places-section']} container direction="column" justifyContent="flex-start" alignItems="baseline">
                <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                    <Grid item>
                        <h3 className={classes['places-title']}>My places</h3>
                    </Grid>   
                    <Grid item>
                        <Link to={{
                            pathname: '/my-places/new',
                            state: {id: ''}
                        }}>
                            <Button className={classes["add-new-place-button"]}>ADD NEW PLACE</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid className={classes['places']} container direction="row" justifyContent="flex-start" alignItems="baseline">
                    {props.homes.map((home) => (
                        <PlaceCard key={home.id} home={home}/>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );  
}

export default PlaceSection;