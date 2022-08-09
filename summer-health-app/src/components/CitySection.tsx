import './CitySection.css';

import CityCard from './CityCard';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import Locations from '../Locations';


const CitySection: React.FC<{cities: {name: string, count: string}[], onLinkClick(component: JSX.Element): void}> = (props) => {
    const locationLinkClickHandler = () => {
        props.onLinkClick(<Locations/>);
    }
    
    return (
        <Container className='popular-locations-section'>
            <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                <Grid item>
                    <h3 className='popular-locations-title'>Popular locations</h3>
                </Grid>   
                <Grid item>
                    <Link className='all-locations-link' onClick={locationLinkClickHandler} underline="hover">VIEW ALL LOCATIONS</Link>
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