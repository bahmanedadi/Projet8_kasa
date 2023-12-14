import React from "react";
import "./Banner.scss";



function Banner({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="banniere" />
      <div className="banner__sombre"></div>
      <span className="banner__txt">{texte}</span>
    </div>
  );
}

export default Banner;
