import './PlaceCard.css'

import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


const PlaceCard: React.FC<{place: {title: string, location: string, subtitle:string, image: string}}> = (props) => {
    return (
        <Grid className='card-place' container direction="column" justifyContent="space-around" alignItems="baseline">
            <Grid item>
                <img src={props.place.image} width="500" height="600"/>
            </Grid>
            <Grid className='place-title' item>
                {props.place.title}
            </Grid>
            <Grid className='place-location' item>
                {props.place.location} 
            </Grid>
            <Grid className='place-subtitle' item>
                {props.place.subtitle}
            </Grid>
            <Grid item>
                <Grid container direction="row" justifyContent="space-around" alignItems="baseline">
                    <Grid item>
                        <Button className='edit-button'>EDIT</Button>
                    </Grid>
                    <Grid item>
                        <Button className='delete-button'>DELETE PLACE</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PlaceCard;