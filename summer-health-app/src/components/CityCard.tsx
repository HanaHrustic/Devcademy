import './CityCard.css'

import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';


const CityCard: React.FC<{city: {name: string, count: string, imageUrl: string}}> = (props) => {
    return (
        <Container className='card-city'>            
            <img src={props.city.imageUrl} className='background-image' />
            <Grid className='city-name' item>
                {props.city.name}
            </Grid>
            <Grid className='city-count' item>
                {props.city.count} properties
            </Grid>
        </Container>
    );
}

export default CityCard;