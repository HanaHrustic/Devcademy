import './AccommodationDetails.css'

import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import { amber } from '@mui/material/colors';

const AccommodationDetails: React.FC<{accommodation: {title: string, subtitle: string, description: string, type: string, categorization: number, personCount: number, imageUrl: string, freeCancelation: boolean, price: number, location: string, postalCode: string}}> = (props) => {
    const stars = [];
    for(let i = 0; i < props.accommodation.categorization; i++) {
        stars.push(<StarRateIcon sx={{ color: amber[400] }}/>);
    }
    
    return (
        <Container className='accommodation-details-section'>
            <img src={require("../../assets/PoseidonHotelSuites.png")}></img>
            <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                <Grid className='accommodation-description' container direction="column" justifyContent="flex-start" alignItems="baseline">
                    <Grid className='accommodation-title' container direction="row" justifyContent="flex-start" alignItems="baseline">
                        <Grid item>
                            <h2 className='detailed-accommodation-name'>{props.accommodation.title}</h2>
                        </Grid>
                        <Grid item>
                            {stars}
                        </Grid>
                    </Grid>
                    <Grid item>
                    <h4 className='detailed-accommodation-subtitle'>{props.accommodation.subtitle}</h4>
                    </Grid>
                    <Grid className='cancelation' container direction="row" justifyContent="flex-start" alignItems="baseline">
                        <Grid item>
                            <InputAdornment position="start" >
                                <CalendarTodayIcon className='available-icon' />
                            </InputAdornment>
                        </Grid>
                        <Grid item>
                            <p>{props.accommodation.freeCancelation ? "Free cancellation available" : "Free cancellation not available"}</p>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <p>{props.accommodation.description.split("\\n").map(line => (<p>{line}</p>))}</p>
                    </Grid>
                </Grid>
                <Grid className='accommodation-summary' container direction="column" justifyContent="flex-start" alignItems="baseline">
                    <Container>
                        <p className='property-info-title'>Property info</p>
                        <p>{props.accommodation.personCount} {props.accommodation.personCount > 1 ? "guests" : "guest"}</p>
                        <p>{props.accommodation.type}</p>
                        <p>EUR {props.accommodation.price} per night</p>
                        <p>{props.accommodation.location}</p>
                        <p>{props.accommodation.postalCode}</p>
                        <Button className='book-your-stay-button' variant="contained">BOOK YOUR STAY</Button>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AccommodationDetails;