import React from "react";

//PERSONAL COMPONENTS IMPORTS

//BOOTSTRAP IMPORTS
import { Container } from "react-bootstrap";
import AboutSlide from "../AboutSlide/AboutSlide";
import FrontSlide from "../FrontSlide/FrontSlide";
import ProjectSlide from "../ProjectSlide/ProjectSlide";

//STYLE IMPORTS
import "./Slider.scss";

export default function Slider({ state }) {
  return (
    <Container style={{ transform: state.show ? "scale(1)" : "scale(0)" }}>
      <div id="slider">
        <div id="slide-container" style={{ marginLeft: `${state.slideShow}%` }}>
          <FrontSlide />
          <AboutSlide />
          <ProjectSlide />
        </div>
      </div>
    </Container>
  );
}
