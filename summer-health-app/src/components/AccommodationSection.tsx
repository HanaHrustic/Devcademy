import './AccommodationSection.css'

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import AccommodationCard from './AccommodationCard';
import Favorites from './Favorites';

const AccommodationSection: React.FC<{homes: {title: string, location: string, price: number, categorization: number, imageUrl: string}[], onLinkClick(component: JSX.Element): void}> = (props) =>{
    const homesLinkClickHandler = () => {
        props.onLinkClick(<Favorites/>);
    }
    
    return (
        <Container className='accommodation-section'>
            <Grid container direction="column" justifyContent="flex-start" alignItems="baseline">
                <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                    <Grid item>
                        <h3 className='accommodation-header'>Homes guests love</h3>
                    </Grid>   
                    <Grid item>
                        <Link className='all-homes-link' onClick={homesLinkClickHandler} underline="hover">VIEW ALL HOMES</Link>
                    </Grid>
                </Grid>
                <Grid className='accommodation-card' container direction="row" justifyContent="flex-start" alignItems="baseline">
                    {props.homes.map((home) => (
                        <AccommodationCard home={home}/>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default AccommodationSection;