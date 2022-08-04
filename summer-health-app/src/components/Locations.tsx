import { Container, Grid } from "@mui/material";
import SimpleSearch from "./SimpleSearch";

function Locations (props:any){
    return (
        <Container>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Grid item>
                    <h1>All locations</h1>
                </Grid>
                <SimpleSearch/>
            </Grid>
        </Container>
    );
}

export default Locations;