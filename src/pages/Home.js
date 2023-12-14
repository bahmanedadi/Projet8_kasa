import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

import Header from "../components/Header/Header";
import imgHomeBanner from "../assets/images/banner/homeBanner.png";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main>
                <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
