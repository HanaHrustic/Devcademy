import './CitySection.css';

import CityCard from './CityCard';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';


const CitySection: React.FC<{cities: {name: string, count: string}[]}> = (props) => {
    return (
        <Container className='popular-locations-section'>
            <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                <Grid item>
                    <h3 className='popular-locations-title'>Popular locations</h3>
                </Grid>   
                <Grid item>
                    <Link className='all-locations-link' href="#" underline="hover">VIEW ALL LOCATIONS</Link>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="flex-start" alignItems="baseline">
                <Grid item>
                    <CityCard cities={props.cities}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CitySection;