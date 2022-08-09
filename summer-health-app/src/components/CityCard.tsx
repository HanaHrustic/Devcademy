import './CityCard.css'

import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';


const CityCard: React.FC<{cities: {name: string, count: string}[]}> = (props) => {
    return (
        <Grid className='card-city' container direction="column" justifyContent="flex-start" alignItems="baseline">
            <Container>
                <Grid className='city-name' item>
                    {props.cities[0].name}
                </Grid>
                <Grid className='city-count' item>
                    {props.cities[0].count} properties
                </Grid>
            </Container>
        </Grid>
    );
}

export default CityCard;