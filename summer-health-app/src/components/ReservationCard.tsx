import classes from './ReservationCard.module.css'

import { Grid, Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

const ReservationCard: React.FC<{id: string}> = (props) => {
    const [accommodation, setAccommodation] = useState<{id: string, title: string, subtitle: string, description: string, shortDescription: string, type: string, categorization: number, personCount: number | null, imageUrl: string, freeCancelation: boolean, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number}, capacity: number}>();

    const fetchAccommodation = useCallback(async () => {
        fetch("https://devcademy.herokuapp.com/api/Accomodations/" + props.id)
            .then(response => {
                return response.json();
            }).then(data => {
                setAccommodation(data);
            });
    }, []);

    useEffect(() => {
        fetchAccommodation();
    }, []);
    
    return (
        <Grid className={classes["reservation-card"]} container direction="row" justifyContent="flex-start" alignItems="flex-start">
            <Grid item className={classes["reservation-image"]}>
                <img className={classes["reservation-img"]} src={accommodation?.imageUrl}/>
            </Grid>
            <Grid item className={classes["reservation-info"]}>
                <Grid container direction="column" justifyContent="flex-start" alignItems="baseline">
                    <Grid item>
                        <h3>{accommodation?.title}</h3>
                    </Grid>
                    <Grid item>
                        <Rating value={accommodation?.categorization ?? 0} readOnly />
                    </Grid>
                    <Grid item>
                        <p>{accommodation?.type}</p>
                    </Grid>
                    <Grid item>
                        <p>{accommodation?.location?.name}</p>
                    </Grid>
                    <Grid item>
                        <p>{accommodation?.location?.postalCode}</p>
                    </Grid>
                    <Grid item>
                        <p>EUR {accommodation?.price} per night</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ReservationCard;