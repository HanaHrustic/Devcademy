import './Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {

  return (
    <div>
      <Navbar>
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand className="brand" href="#home">Staycation</Navbar.Brand>
          <Nav className='d-flex justify-content-between'>
            <Nav.Link className="tab" href="#locations">Locations</Nav.Link>
            <Nav.Link className="tab" href="#my_places">My places</Nav.Link>
            <Nav.Link className="tab" href="#my_bookings">My Bookings</Nav.Link>
          </Nav>              
          <Nav.Link className="logout" href="#logout">LOGOUT</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;