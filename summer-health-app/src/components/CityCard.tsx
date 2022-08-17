import './CityCard.css'

import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';


const CityCard: React.FC<{city: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}}> = (props) => {
    return (
        <Container className='card-city'>            
            <img src={props.city.imageUrl} className='background-image' />
            <Grid className='city-name' item>
                {props.city.name}
            </Grid>
            <Grid className='city-count' item>
                {props.city.properties} {parseInt(props.city.properties.toString().replace(/,/g, '')) > 1 ? "properties" : "property"}
            </Grid>
        </Container>
    );
}

export default CityCard;