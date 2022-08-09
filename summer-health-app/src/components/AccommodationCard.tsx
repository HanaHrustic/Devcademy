import './AccommodationCard.css'

import Grid from '@mui/material/Grid';
import StarRateIcon from '@mui/icons-material/StarRate';
import { amber } from '@mui/material/colors';
import { Rating } from '@mui/material';

const AccommodationCard: React.FC<{homes: {title: string, location: string, price: number, categorization: number}[]}> = (props) =>{
    return (
        <Grid className='card-accommodation' container direction="column" justifyContent="space-around" alignItems="baseline">
            <Grid item>
                <img src={require('../assets/Sugar-Spice-Apartments.png')}/>
            </Grid>
            <Grid className='accommodation-title' item>
                {props.homes[0].title}
            </Grid>
            <Grid className='accommodation-location' item>
                {props.homes[0].location} 
            </Grid>
            <Grid className='accommodation-price' item>
                EUR {props.homes[0].price}
            </Grid>
            <Grid className='accommodation-categorization' item>
                <Rating value={props.homes[0].categorization} readOnly />
            </Grid>
        </Grid>
    );
}

export default AccommodationCard;