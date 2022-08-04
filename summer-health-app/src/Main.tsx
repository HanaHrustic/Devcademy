import Navigation from './components/landing-page/Navigation';
import './Main.css';
import Footer from './components/landing-page/Footer';
import Home from './components/Home'
import { useState } from 'react';
import Favorites from './components/Favorites';

function Main() {

  const changePage = (component: JSX.Element) => {
    setContent(component);
  }

  const [content, setContent] = useState(<Home onLinkClick={changePage}/>);

  return (
    <div>
      <Navigation onLinkClick={changePage}/>
      {content}
      <Footer/>
    </div>
  );
}

export default Main;