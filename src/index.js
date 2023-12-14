import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./sass/index.scss"


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <Footer/>
    <div>
      <Banner image="chemin/vers/votre/image.jpg" texte="Votre texte ici" />
    </div>
    </div>
 
);



