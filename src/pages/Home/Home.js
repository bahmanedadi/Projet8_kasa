import React from "react";
import Banner from "../../components/Banner/Banner";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";

import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
import Gallery from "../../components/Gallery/Gallery";



const Home = () => {
  return (
    <div className="home">
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
       <Gallery/>
       
        <Tag text=""/>
        <Collapse titre ="" children=""/>
      </main>
    </div>
  );
};

export default Home;