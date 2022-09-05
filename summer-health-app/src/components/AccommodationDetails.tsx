import classes from './AccommodationDetails.module.css'

import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InputAdornment from '@mui/material/InputAdornment';
import { Button, Rating } from '@mui/material';
import { useParams, useHistory } from 'react-router-dom';

import { useCallback, useEffect, useState } from "react";

const AccommodationDetails = (props: any) => {
    const [accommodation, setAccommodation] = useState<{id: string, title: string, subtitle: string, description: string, shortDescription: string, type: string, categorization: number, personCount: number | null, imageUrl: string, freeCancelation: boolean, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number} | null, capacity: number}>();
    const history = useHistory();
    const params = useParams<{accommodationId: string}>();

    const fetchAccommodation = useCallback(async () => {
        fetch("https://devcademy.herokuapp.com/api/Accomodations/" + params.accommodationId)
            .then(response => {
                return response.json();
            }).then(data => {
                setAccommodation(data);
            });
    }, []);
    
    const bookingLinkClickHandler = () => {
        history.push({
            pathname: "/reservation",
            state: {id: accommodation?.id}
        })
    }

    useEffect(() => {
        fetchAccommodation();
    }, []);
    
    return (
        <Container className={classes["accommodation-details-section"]}>
            <img className={classes["accommodation-details-img"]} src={accommodation?.imageUrl}/>
            <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                <Grid className={classes["accommodation-description"]} container direction="column" justifyContent="flex-start" alignItems="baseline">
                    <Grid className={classes["accommodation-title"]} container direction="row" justifyContent="flex-start" alignItems="baseline">
                        <Grid item>
                            <h2 className={classes["detailed-accommodation-name"]}>{accommodation?.title}</h2>
                        </Grid>
                        <Grid item>
                            <Rating value={accommodation?.categorization || 0} readOnly />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <h4 className={classes["detailed-accommodation-subtitle"]}>{accommodation?.subtitle}</h4>
                    </Grid>
                    <Grid className={classes["cancelation"]} container direction="row" justifyContent="flex-start" alignItems="baseline">
                        <Grid item>
                            <InputAdornment position="start" >
                                <CalendarTodayIcon className='available-icon' />
                            </InputAdornment>
                        </Grid>
                        <Grid item>
                            <p>{accommodation?.freeCancelation ? "Free cancellation available" : "Free cancellation not available"}</p>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <p>{accommodation?.description}</p>
                    </Grid>
                </Grid>
                <Grid className={classes["accommodation-summary"]} container direction="column" justifyContent="flex-start" alignItems="baseline">
                    <Container>
                        <p className={classes["property-info-title"]}>Property info</p>
                        <p>{accommodation?.personCount} {accommodation?.personCount ? accommodation.personCount > 1 ? "guests" : "guest" : ""}</p>
                        <p>{accommodation?.type}</p>
                        <p>EUR {accommodation?.price} per night</p>
                        <p>{accommodation?.location?.name}</p>
                        <p>{accommodation?.location?.postalCode}</p>
                        <Button onClick={bookingLinkClickHandler} className='book-your-stay-button' variant="contained">BOOK YOUR STAY</Button>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AccommodationDetails;