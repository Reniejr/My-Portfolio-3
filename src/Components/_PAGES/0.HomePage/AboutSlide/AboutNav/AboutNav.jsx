import React, { useState } from "react";

//VALUES IMPORTS
import { aboutNav } from "Components/_UTILITIES/values";

//STYLE IMPORTS
import "./AboutNav.scss";

export default function AboutNav({ functions }) {
  const [show, setShow] = useState(true);

  return (
    <nav id="about-nav" style={{ marginRight: show ? "" : "-400px" }}>
      <div className="toggler" onClick={() => setShow(!show)}></div>
      <ul>
        {aboutNav.map((v, vI) => {
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
