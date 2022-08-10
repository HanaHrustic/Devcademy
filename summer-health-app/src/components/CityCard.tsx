import './CityCard.css'

import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';


const CityCard: React.FC<{city: {name: string, count: string}}> = (props) => {
    return (
        <Grid className='card-city' container direction="column" justifyContent="flex-start" alignItems="baseline">
            <Container>
                <Grid className='city-name' item>
                    {props.city.name}
                </Grid>
                <Grid className='city-count' item>
                    {props.city.count} properties
                </Grid>
            </Container>
        </Grid>
    );
}

export default CityCard;