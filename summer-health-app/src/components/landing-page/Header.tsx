import './Header.css'

import Container from 'react-bootstrap/Container';
import AccommodationSearch from '../AccommodationSearch';

const Header = (props: any) => {
    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }

    return(
        <div className="header-background">
            <Container>
                <h1 className='header-title'>Enjoy your travels</h1>
                <h2 className='header-subtitle'>with Staycation and collect rewards</h2>
                <h3 className='header-description'>Book now & save 10% or more today</h3>
                <div className='header-search'>
                    <AccommodationSearch onLinkClick={changePage}/>
                </div>
            </Container>
        </div>
    );
}

export default Header;