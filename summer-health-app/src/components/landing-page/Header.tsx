import './Header.css'

import Container from 'react-bootstrap/Container';

function Header(){
    return(
        <div className="header-background">
            <Container>
                <h1 className='header-title'>Enjoy your travels</h1>
                <h2 className='header-subtitle'>with Staycation and collect rewards</h2>
                <h3 className='header-description'>Book now & save 10% or more today</h3>
            </Container>
        </div>
    );
}

export default Header;