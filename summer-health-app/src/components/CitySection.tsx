import classes from './CitySection.module.css';

import CityCard from './CityCard';
import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import Locations from './Locations';
import { Link } from 'react-router-dom';


const CitySection: React.FC<{cities: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}[], onLinkClick(component: JSX.Element): void}> = (props) => {
    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }
    
    const locationLinkClickHandler = () => {
        props.onLinkClick(<Locations onLinkClick={changePage}/>);
    }
    
    return (
        <Container className={classes["popular-locations-section"]}>
            <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                <Grid item>
                    <h3 className={classes['popular-locations-title']}>Popular locations</h3>
                </Grid>   
                <Grid item>
                    <Link to='locations' className={classes['all-locations-link']}>VIEW ALL LOCATIONS</Link>
                </Grid>
            </Grid>
            <Grid className={classes["city-row"]} container direction="row" justifyContent="flex-start" alignItems="baseline">
                {props.cities.slice(0, 2).map((city) => ( 
                    <Grid className={classes["city"]} key={city.id} item>
                        <CityCard city={city}/>
                    </Grid>
                ))}
            </Grid>
            <Grid className={classes["city-row"]} container direction="row" justifyContent="flex-start" alignItems="baseline">
                {props.cities.slice(2, 5).map((city) => (
                    <Grid className={classes["city"]} key={city.id} item>
                        <CityCard city={city}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CitySection;