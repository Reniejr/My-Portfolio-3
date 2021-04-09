import React, { useState, useEffect } from "react";

//UTILITIES IMPORTS
import { binaryStrings, binaryStyles } from "./utilities";

//STYLE IMPORTS
import "./Backgrounds.scss";

export function BgCoding() {
  //STATE
  const [binaryArray, setBinaryArray] = useState([]);
  const [intervalAnimation, setIntervalAnimation] = useState(true);

  //CREATE BINARY ARRAY
  useEffect(() => {
    const newBinaryArray = binaryStrings();
    setBinaryArray(newBinaryArray);
  }, []);
  useEffect(() => {
    if (intervalAnimation) {
      setTimeout(() => {
        setIntervalAnimation(false);
      }, 25000);
    } else {
      setIntervalAnimation(true);
    }
  }, [intervalAnimation]);

  return (
    <div id="bg-coding" className="bg">
      {binaryArray.map((b, bI) => {
        let style = { fontSize: binaryStyles() };
        return (
          <div className="binary-text" key={bI} style={style}>
            {b.map((char, charI) => {
              let charDelay = `${0.1 * charI}s`;
              let dropDelay = `${b.length - charI}s`;
              return (
                <p
                  key={charI}
                  style={{
                    animationDelay: `${charDelay}, ${dropDelay}, ${dropDelay}`,
                  }}
                  className={intervalAnimation ? "binary-animated" : ""}
                >
                  {char}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export function BgLayout() {
  return (
    <div id="bg-layout" className="bg">
      <BgCoding />
      <section className="left-side"></section>
      <section className="right-side"></section>
    </div>
  );
}
