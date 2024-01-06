import React from 'react';
import starE from "../../assets/images/star/starEmpty.svg";
import starF from "../../assets/images/star/starFull.svg";

function Star(props) {
  const score = props.score;
  const maxScore = 5;

  return (
    <div className="star">
      {Array.from({ length: maxScore }, (_, index) => (
        <img  key={index + 1} className="etoile" src={score >= index + 1 ? starF : starE } alt="star"/>
      ))}
    </div>
  );
}

export default Star;
