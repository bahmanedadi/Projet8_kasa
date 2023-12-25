import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../sass/index.scss";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import About from "../pages/About/About";
import Logement from "../pages/Logement/Logement";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};


export default App;