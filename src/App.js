import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./sass/index.scss";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from "./pages/About/About";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};


export default App;