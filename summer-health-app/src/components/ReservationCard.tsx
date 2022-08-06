import classes from './ReservationCard.module.css'

import { Grid } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import { amber } from '@mui/material/colors';

const ReservationCard: React.FC<{accommodation: {title: string, subtitle: string, description: string, type: string, categorization: number, personCount: number, imageUrl: string, freeCancelation: boolean, price: number, location: string, postalCode: string}}> = (props) => {
    const stars = [];
    for(let i = 0; i < props.accommodation.categorization; i++) {
        stars.push(<StarRateIcon sx={{ color: amber[400] }}/>);
    }
    
    return (
        <Grid className={classes["reservation-card"]} container direction="row" justifyContent="flex-start" alignItems="flex-start">
            <Grid item className={classes["reservation-image"]}>
                <img src={require("../assets/PoseidonHotelSuitesIcon.png")}/>
            </Grid>
            <Grid item className={classes["reservation-info"]}>
                <Grid container direction="column" justifyContent="flex-start" alignItems="baseline">
                    <Grid item>
                        <h3>{props.accommodation.title}</h3>
                    </Grid>
                    <Grid item>
                        {stars}
                    </Grid>
                    <Grid item>
                        <p>{props.accommodation.type}</p>
                    </Grid>
                    <Grid item>
                        <p>{props.accommodation.location}</p>
                    </Grid>
                    <Grid item>
                        <p>{props.accommodation.postalCode}</p>
                    </Grid>
                    <Grid item>
                        <p>EUR {props.accommodation.price} per night</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ReservationCard;