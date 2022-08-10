import './AccommodationCard.css'

import Grid from '@mui/material/Grid';
import { Rating } from '@mui/material';

const AccommodationCard: React.FC<{home: {title: string, location: string, price: number, categorization: number, imageUrl: string}}> = (props) =>{
    return (
        <Grid className='card-accommodation' container direction="column" justifyContent="space-around" alignItems="baseline">
            <Grid item>
                <img src={props.home.imageUrl}/>
            </Grid>
            <Grid className='accommodation-title' item>
                {props.home.title}
            </Grid>
            <Grid className='accommodation-location' item>
                {props.home.location} 
            </Grid>
            <Grid className='accommodation-price' item>
                EUR {props.home.price}
            </Grid>
            <Grid className='accommodation-categorization' item>
                <Rating value={props.home.categorization} readOnly />
            </Grid>
        </Grid>
    );
}

export default AccommodationCard;