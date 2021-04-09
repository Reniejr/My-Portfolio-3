import React, { useState } from "react";

//VALUES IMPORTS
import { projectNav } from "Components/_UTILITIES/values";

//STYLE IMPORTS
import "./ProjectNav.scss";

export default function ProjectNav({ functions }) {
  const [show, setShow] = useState(false);
  return (
    <nav id="project-nav" style={{ marginRight: show ? "" : "-400px" }}>
      <div className="toggler" onClick={() => setShow(!show)}></div>
      <ul>
        {projectNav.map((v, vI) => {
          return (
            <li key={vI} onClick={() => functions.setSlide(-76 * vI)}>
              {v.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
