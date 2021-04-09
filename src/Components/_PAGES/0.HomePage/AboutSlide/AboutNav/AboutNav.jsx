import React, { useState, useEffect } from "react";

//VALUES IMPORTS
import { aboutNav, navQuery } from "Components/_UTILITIES/values";

//STYLE IMPORTS
import "./AboutNav.scss";

export default function AboutNav({ functions }) {
  const [show, setShow] = useState(true);
  const [queryNav, setQueryNav] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const query = navQuery(width);
    // setQueryNav(query.nav);
  }, []);

  return (
    <nav id="about-nav" style={{ marginRight: show ? "" : `-400px` }}>
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
