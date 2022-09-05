import Navigation from './components/Navigation';
import './Main.css';
import Footer from './components/Footer';
import Home from './components/Home'
import Locations from './components/Locations';
import { useContext } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import MyPlaces from './components/MyPlaces';
import MyBookings from './components/MyBookings';
import Favorites from './components/Favorites';
import AccommodationDetails from './components/AccommodationDetails';
import NewPlaceForm from './components/forms/NewPlaceForm';
import Reservation from './components/Reservation';
import AccommodationByLocation from './components/AccommodationsByLocation';
import Login from './components/forms/Login';
import AuthContext from './components/store/auth-context';


function Main() {
  const authCtx = useContext(AuthContext);

  return (
    <div className='page-wrapper'>
      {authCtx.isLoggedIn &&
        <Navigation/>
      }
      <div className='content'>
        <Switch >
          {!authCtx.isLoggedIn &&
            <Route path='/'>
              <Redirect to='/login'/>
            </Route>
          }
          {!authCtx.isLoggedIn &&
            <Route path='/login'>
              <Login/>
            </Route>
          }
          <Route path='/' exact>
            <Redirect to='/home'/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/locations'>
            <Locations/>
          </Route>
          <Route path='/my-places' exact>
            <MyPlaces/>
          </Route>
          <Route path='/my-bookings'>
            <MyBookings/>
          </Route>
          <Route path='/favorites'>
            <Favorites/>
          </Route>
          <Route path='/accommodations' exact>
            <Favorites/>
          </Route>
          <Route path='/accommodations/location?locationId=:locationId'>
              <AccommodationByLocation/>
          </Route>
          <Route path='/accommodations/:accommodationId' exact>
            <AccommodationDetails/>
          </Route>
          <Route path='/my-places/new'>
              <NewPlaceForm/>
          </Route>
          <Route path='/reservation'>
              <Reservation/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default Main;