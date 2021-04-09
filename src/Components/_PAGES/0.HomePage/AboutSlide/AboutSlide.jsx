import React, { useState } from "react";

//VALUES IMPORTS
import { aboutSlider } from "Components/_UTILITIES/values";

//_UTILITIES IMPORTS
import { convertText } from "Components/_UTILITIES/utilities";

//PERSONAL COMPONENTS IMPORTS
import AboutNav from "./AboutNav/AboutNav";

//STYLE IMPORTS
import "./AboutSlide.scss";

export default function AboutSlide() {
  const [slide, setSlide] = useState(0);

  return (
    <div id="about-page" className="slide">
      <AboutNav functions={{ setSlide }} />
      <i
        className="fas fa-chevron-up"
        onClick={() => (slide === 0 ? setSlide(-228) : setSlide(slide + 76))}
      ></i>
      <div className="about-slider">
        <div
          className="about-slide-container"
          style={{ marginTop: `${slide}vh` }}
        >
          {aboutSlider.map((topic) => {
            let content = convertText(topic.content);
            return (
              <div className="about-slide" key={topic.id}>
                <div className="content">{content}</div>
                <div
                  className="about-img"
                  style={{
                    background: `url(${topic.bgImage})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <i
          className="fas fa-chevron-down"
          onClick={() => (slide === -228 ? setSlide(0) : setSlide(slide - 76))}
        ></i>
      </div>
    </div>
  );
}
