import { Grid } from "@mui/material";
import Container from 'react-bootstrap/Container';
import classes from './Reservation.module.css';

import ReservationCard from "./ReservationCard";
import ReservationForm from "./forms/ReservationForm";

const Reservation: React.FC<{id: string}> = (props) => {
    return (
        <Container>
            <Grid container direction="column" justifyContent="flex-start" alignItems="baseline">
                <p className={classes["reservation-title"]}>Book your stay</p>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Grid item className={classes["reservation-form"]}>
                        <ReservationForm id={props.id}/>
                    </Grid>
                    <Grid item className={classes["reservation-info"]}>
                        <ReservationCard id={props.id}/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Reservation;