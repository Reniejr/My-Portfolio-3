import React from "react";

//VALUES IMPORTS
import { navValues } from "Components/_UTILITIES/values";

//STYLE IMPORTS
import "./Controllers.scss";

export default function Controllers({ state, functions }) {
  const navigate = (id) => {
    if (id === "about") {
      functions.setSlideShow(-100);
    }
    if (id === "projects") {
      functions.setSlideShow(-200);
    }
  };

  return (
    <div id="controllers">
      <div className="indicators">
        <div
          className="indicator"
          onClick={() => functions.setSlideShow(0)}
          style={{
            backgroundColor: state.slideShow === 0 ? "red" : "white",
            transform: state.slideShow === 0 ? "scale(1.3)" : "scale(1)",
          }}
        ></div>
        {navValues.map((v, vI) => {
          return (
            <div
              className="indicator"
              key={vI}
              onClick={() => navigate(v.id)}
              style={{
                backgroundColor:
                  state.slideShow === vI * -100 - 100 ? "red" : "white",
                transform:
                  state.slideShow === vI * -100 - 100
                    ? "scale(1.3)"
                    : "scale(1)",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export const ArrowsControllers = function ({ state, functions }) {
  return (
    <>
      <div className="arrow-left">
        <i
          className="fas fa-chevron-left"
          onClick={() => functions.setSlideShow(state.slideShow + 100)}
        ></i>
      </div>
      <div className="arrow-right">
        <i
          className="fas fa-chevron-right"
          onClick={() => functions.setSlideShow(state.slideShow - 100)}
        ></i>
      </div>
    </>
  );
};
