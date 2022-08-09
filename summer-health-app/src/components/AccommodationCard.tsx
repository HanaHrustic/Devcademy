import './AccommodationCard.css'

import Grid from '@mui/material/Grid';
import StarRateIcon from '@mui/icons-material/StarRate';
import { amber } from '@mui/material/colors';

const AccommodationCard: React.FC<{homes: {title: string, location: string, price: number, categorization: number}[]}> = (props) =>{
    const stars = [];
    for(let i = 0; i < props.homes[0].categorization; i++) {
        stars.push(<StarRateIcon sx={{ color: amber[400] }}/>);
    }
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
                {stars}
            </Grid>
        </Grid>
    );
}

export default AccommodationCard;