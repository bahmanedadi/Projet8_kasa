import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./sass/index.scss";
import Home from "./pages/Home/Home";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};


export default App;