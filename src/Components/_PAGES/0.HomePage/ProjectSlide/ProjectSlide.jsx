import React, { useState } from "react";

//VALUES IMPORTS
import { projectSlider } from "Components/_UTILITIES/values";

//PERSONAL COMPONENTS IMPORTS
import ProjectNav from "./ProjectNav/ProjectNav";

//STYLES IMPORTS
import "./ProjectSlide.scss";

export default function ProjectSlide() {
  const [slide, setSlide] = useState(0);

  const redirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="project-page" className="slide">
      <ProjectNav functions={{ setSlide }} />
      <i
        className="fas fa-chevron-up"
        onClick={() => (slide === 0 ? setSlide(-152) : setSlide(slide + 76))}
      ></i>
      <div className="project-slider">
        <div
          className="project-slide-container"
          style={{ marginTop: `${slide}vh` }}
        >
          {projectSlider.map((topic) => {
            return (
              <div className="project-slide" key={topic.id}>
                <div className="content">
                  <p>{topic.content}</p>
                  <div className="info">
                    <button onClick={() => redirect(topic.liveLink)}>
                      Visit WebSite
                    </button>
                    <div className="project-status">
                      <div
                        className="status-indicator"
                        style={{
                          backgroundColor: topic.completed ? "green" : "red",
                        }}
                      ></div>
                      {topic.completed ? "Finish" : "On Working"}
                    </div>
                    <button onClick={() => redirect(topic.githubLink)}>
                      <i className="fab fa-github"></i>
                      Github Repo
                    </button>
                  </div>
                </div>
                <div className="project-img">
                  <video src={topic.bgImage} loop autoPlay muted></video>
                </div>
              </div>
            );
          })}
        </div>
        <i
          className="fas fa-chevron-down"
          onClick={() => (slide === -152 ? setSlide(0) : setSlide(slide - 76))}
        ></i>
      </div>
    </div>
  );
}
