import React from "react";
import "./sass/index.scss";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";




const App = () => {
  return (
    <main>
      <Header/>
      <Banner/>
      <Footer/>
    </main>
  );
};

export default App;
