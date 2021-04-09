import React from "react";

//STYLE IMPORTS
import "./FrontSlide.scss";

export default function FrontSlide() {
  return (
    <div id="front-slide" className="slide">
      <img src="https://i.ibb.co/KbB92db/Livello-1.png" alt="" />
      <div className="title">
        <h1>MERN Stack Developer</h1>
        <img src="https://i.ibb.co/0GLzkSV/mongodb.png" alt="" />
        <img src="https://i.ibb.co/hVYZTnZ/expressjs.png" alt="" />
        <img src="https://i.ibb.co/ck9MxkQ/reactjs.png" alt="" />
        <img src="https://i.ibb.co/4Zn5y44/nodejs.png" alt="" />
      </div>
      <div className="one-liner">
        <p>"Never Stop Learning"</p>
        <p>
          From 0 to Web. <br /> No coding experience before my journey on Strive
          School, <br /> but now i am a real Web Developer.
        </p>
      </div>
    </div>
  );
}