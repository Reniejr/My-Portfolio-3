import React from "react";

//VALUES IMPORTS
import { navValues } from "Components/_UTILITIES/values";

//STYLE IMPORTS
import "./Navbar.scss";

export default function Navbar({ state, functions }) {
  const navigate = (id) => {
    if (id === "about") {
      functions.setSlideShow(-100);
    }
    if (id === "projects") {
      functions.setSlideShow(-200);
    }
  };

  return (
    <nav id="navbar">
      <ul>
        {navValues.map((v, vI) => {
          return (
            <li
              key={vI}
              onClick={() => navigate(v.id)}
              style={{
                color: state.slideShow === vI * -100 - 100 ? "red" : "",
              }}
            >
              {v.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
