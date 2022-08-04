import './Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../Home';
import Locations from '../Locations';
import MyPlaces from '../MyPlaces';
import MyBookings from '../MyBookings';

const Navigation = (props: any) => {

  const changePage = (component: JSX.Element) => {
    props.onLinkClick(component);
  }

  const locationLinkClickHandler = () => {
    props.onLinkClick(<Locations/>);
  }
  
  const brandLinkClickHandler = () => {
    props.onLinkClick(<Home onLinkClick={changePage}/>);
  }

  const myPlacesLinkClickHandler = () => {
    props.onLinkClick(<MyPlaces/>);
  }

  const myBookingsLinkClickHandler = () => {
    props.onLinkClick(<MyBookings/>);
  }

  return (
    <div>
      <Navbar>
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand onClick={brandLinkClickHandler} className="brand">Staycation</Navbar.Brand>
          <Nav className='d-flex justify-content-between'>
            <Nav.Link onClick={locationLinkClickHandler} className="tab">Locations</Nav.Link>
            <Nav.Link onClick={myPlacesLinkClickHandler} className="tab">My places</Nav.Link>
            <Nav.Link onClick={myBookingsLinkClickHandler} className="tab">My Bookings</Nav.Link>
          </Nav>              
          <Nav.Link className="logout" href="#logout">LOGOUT</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;