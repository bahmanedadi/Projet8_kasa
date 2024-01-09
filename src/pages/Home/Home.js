import React from "react";
import Banner from "../../components/Banner/Banner";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";
import Gallery from "../../components/Gallery/Gallery";


const Home = () => {
  return (
    <main>
      <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
      <Gallery />
    </main>
  );
};
export default Home;