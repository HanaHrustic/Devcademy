import classes from './AccommodationCard.module.css'

import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import AccommodationDetails from './AccommodationDetails';

const AccommodationCard: React.FC<{home: {id: string, title: string, categorization: number, imageUrl: string, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}}}> = (props) =>{ 
    return (
        <Grid className={classes["card-accommodation"]} container direction="column" justifyContent="space-around" alignItems="baseline">
            <Grid item className={classes["image-container"]}>
                <img className={classes["accommodation-card-image"]} src={props.home.imageUrl}/>
            </Grid>
            <Grid className={classes["accommodation-title"]} item>
                <Link to={`/accommodations/${props.home.id}`}>
                    {props.home.title}
                </Link>
            </Grid>
            <Grid className={classes["accommodation-location"]} item>
                {props.home.location?.name} 
            </Grid>
            <Grid className={classes["accommodation-price"]} item>
                EUR {props.home.price}
            </Grid>
            <Grid className={classes["accommodation-categorization"]} item>
                <Rating value={props.home.categorization} readOnly />
            </Grid>
        </Grid>
    );
}

export default AccommodationCard;