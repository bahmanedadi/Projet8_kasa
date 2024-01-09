import React from "react";


function Banner({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner_img" src={image} alt="les montagnes" />
      <div className="banner_sombre"></div>
      <span className="banner_txt">{texte}</span>
    </div>
  );
}

export default Banner;

