import React, { useState } from "react";

function SlideShow({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const changeImage = (increment) => {
    setCurrent((current + increment + length) % length);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <section className="slide">
      {length > 1 && (
        <>
          <p className="left-Arrow" onClick={() => changeImage(-1)}>  </p>
          <p className="right-Arrow" onClick={() => changeImage(1)}>  </p>
        </>
      )}
      {slides.map((image, index) => (
        <div key={index} className={`slider ${index === current ? "" : ""}`}>
          {index === current && (
            <>
              <img src={image} alt={`img-${index}`} className="slider_image" />
              {length > 1 && (
                <span className="slider_number">
                  {current + 1}/{length}
                </span>
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default SlideShow;


