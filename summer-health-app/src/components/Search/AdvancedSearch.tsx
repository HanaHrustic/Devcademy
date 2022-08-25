import { Button, Grid } from "@mui/material";
import { useState } from "react";

import classes from './AdvancedSearch.module.css'
import AdvancedSearchControls from "./AdvancedSearchControls";

const AdvancedSearch = (props: any) => {
    const [number, setNumber] = useState('');
    const [typeOfAccommodation, setTypeOfAccommodation] = useState('');

    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        props.formResult(typeOfAccommodation)
    }

    return(
        <form onSubmit={submitHandler}>
            <Grid className={classes["advanced-search"]} container direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item>
                    <AdvancedSearchControls numberChange={setNumber} typeOfAccomodationChange={setTypeOfAccommodation} checkInChange={setCheckIn} checkOutChange={setCheckOut}/>
                </Grid>
                <Grid item>
                    <Button className={classes["advanced-button"]} type="submit" variant="contained">SEARCH</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default AdvancedSearch;