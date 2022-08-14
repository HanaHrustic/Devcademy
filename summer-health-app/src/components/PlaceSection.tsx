import './PlaceSection.css'
import PlaceCard from './PlaceCard'

import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import { Button } from '@mui/material';
import NewPlaceForm from './Forms/NewPlaceForm';

const PlaceSection: React.FC<{places: {title: string, location: string, subtitle: string, image: string}[], onLinkClick(component: JSX.Element): void}> = (props) => {
    const placesLinkClickHandler = () => {
        props.onLinkClick(<NewPlaceForm/>);
    }
    
    return (
        <Container>
            <Grid className='places-section' container direction="column" justifyContent="flex-start" alignItems="baseline">
                <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                    <Grid item>
                        <h3 className='places-title'>My places</h3>
                    </Grid>   
                    <Grid item>
                        <Button className="add-new-place-button" variant="contained" onClick={placesLinkClickHandler}>ADD NEW PLACE</Button>
                    </Grid>
                </Grid>
                <Grid className='places' container direction="row" justifyContent="flex-start" alignItems="baseline">
                    {props.places.map((place) => (
                        <PlaceCard place={place}/>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );  
}

export default PlaceSection;