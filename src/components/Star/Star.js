import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Star(props) {
  const score = props.score;
  const maxScore = 5;

  return (
    <div className="star_contenair">
      {Array.from({ length: maxScore }, (_, index) => (
        <FontAwesomeIcon
          icon={faStar}
          className={score >= index + 1 ? 'star_red' : 'star'}
          key={index + 1}
        />
      ))}
    </div>
  );
}

export default Star;

