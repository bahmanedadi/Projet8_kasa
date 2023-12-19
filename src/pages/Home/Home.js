import React from "react";
import Banner from "../../components/Banner/Banner";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";
import Card from "../../components/Card/Card";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
import Data from "../../logements.json";


const Home = () => {
  return (
    <div className="home">
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        {
            Data.map(({id,  title,  cover,  pictures})=>(
                <Card title={title} image={cover}/> 
            )
            )
        }
       
        <Tag text=""/>
        <Collapse titre ="" children=""/>
      </main>
    </div>
  );
};

export default Home;