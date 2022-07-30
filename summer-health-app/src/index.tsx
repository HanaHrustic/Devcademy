import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Main />);
