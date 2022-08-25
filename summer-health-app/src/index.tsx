import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/forms/Login';
import { AuthContextProvider } from './components/store/auth-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Main/>
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>
  
);
