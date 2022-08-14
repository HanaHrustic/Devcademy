import { Container, Grid } from "@mui/material";
import AdvancedSearch from "./Search/AdvancedSearch";


function Favorites (){
    return (
        <Container>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Grid item>
                    <h1>Homes guests love</h1>
                </Grid>
                <AdvancedSearch/>
            </Grid>
        </Container>
    );
}

export default Favorites;