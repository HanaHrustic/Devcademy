import { Grid } from "@mui/material";
import Container from 'react-bootstrap/Container';
import classes from './Reservation.module.css';

import ReservationCard from "./ReservationCard";
import ReservationForm from "./ReservationForm";

const Reservation: React.FC<{accommodation: {title: string, subtitle: string, description: string, type: string, categorization: number, personCount: number, imageUrl: string, freeCancelation: boolean, price: number, location: string, postalCode: string}}> = (props) => {
    return (
        <Container>
            <Grid container direction="column" justifyContent="flex-start" alignItems="baseline">
                <p className={classes.reservation_title}>Book your stay</p>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Grid item>
                        <ReservationForm/>
                    </Grid>
                    <Grid item>
                        <ReservationCard accommodation={props.accommodation}/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Reservation;