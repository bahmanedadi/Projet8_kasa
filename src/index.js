import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./sass/index.scss"


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import imgHomeBanner from "./assets/images/banner/homeBanner.png"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <Footer/>
    <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
    
    </div>
 
);



