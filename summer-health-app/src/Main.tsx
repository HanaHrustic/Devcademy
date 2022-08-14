import Navigation from './components/Navigation';
import './Main.css';
import Footer from './components/Footer';
import Home from './components/Home'
import { useState } from 'react';

function Main() {

  const changePage = (component: JSX.Element) => {
    setContent(component);
  }

  const [content, setContent] = useState(<Home onLinkClick={changePage}/>);

  return (
    <div className='page-wrapper'>
      <Navigation onLinkClick={changePage}/>
      <div className='content'>{content}</div>
      <Footer/>
    </div>
  );
}

export default Main;