import './Header.css'

import Container from 'react-bootstrap/Container';

function Header(){
    return(
        <div className="background">
            <Container>
                <h1>Enjoy your travels</h1>
                <h2>with Staycation and collect rewards</h2>
                <h3>Book now & save 10% or more today</h3>
            </Container>
        </div>
    );
}

export default Header;