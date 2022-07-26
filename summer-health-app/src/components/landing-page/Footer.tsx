import { Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
import './Footer.css'

function Footer(){
    return (
        <div>
            <footer>
                <Container>
                    <Grid className='footer-grid' container direction="row" justifyContent="flex-start" alignItems="center">   
                        <p className='footer-name'>Staycation</p>    
                    </Grid>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;