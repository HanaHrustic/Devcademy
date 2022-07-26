import './PlaceSection.css'
import PlaceCard from './PlaceCard'

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import { Button } from '@mui/material';

const PlaceSection: React.FC<{places: {title: string, location: string, subtitle: string, image: string}[]}> = (props) => {
    return (
        <Container>
            <Grid className='places-section' container direction="column" justifyContent="flex-start" alignItems="baseline">
                <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                    <Grid item>
                        <h3 className='places-title'>My places</h3>
                    </Grid>   
                    <Grid item>
                        <Button className="add-new-place-button" variant="contained">ADD NEW PLACE</Button>
                    </Grid>
                </Grid>
                <Grid className='places' container direction="row" justifyContent="flex-start" alignItems="baseline">
                    <Grid item>
                        <PlaceCard place={props.places[0]}/>
                    </Grid>   
                    <Grid item>
                        <PlaceCard place={props.places[1]}/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );  
}

export default PlaceSection;