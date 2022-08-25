import './Navigation.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import AuthContext from './store/auth-context';

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const handleLogoutButton = () => {
    authCtx.logout();
    history.replace('/login');
  }

  return (
    <div>
      <Navbar>
        <Container className='d-flex justify-content-between'>
          <NavLink to='/home' className="brand">Staycation</NavLink>
          <Grid className='links' container direction="row" justifyContent="center" alignItems="center">
            <NavLink to='/locations' className="tab">Locations</NavLink>
            <NavLink to='/my-places' className="tab">My places</NavLink>
            <NavLink to='my-bookings' className="tab">My Bookings</NavLink>           
          </Grid>
          <NavLink to='/' className="logout" onClick={handleLogoutButton}>LOGOUT</NavLink>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;