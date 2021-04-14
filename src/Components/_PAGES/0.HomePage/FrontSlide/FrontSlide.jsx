import React from "react";

//STYLE IMPORTS
import "./FrontSlide.scss";

export default function FrontSlide() {
  return (
    <div id="front-slide" className="slide">
      <img
        src="https://i.ibb.co/7pNxPvS/photo-2021-04-10-20-44-52-removebg-preview.png"
        alt=""
      />
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
        <div className="contacts">
          <span>
            {" "}
            <div className="logos">
              <img src="https://i.ibb.co/mR0ZPYJ/gmail.png" alt="" />{" "}
            </div>
            reniejr@gmail.com
          </span>
          <span>
            <div className="logos">
              <img src="https://i.ibb.co/xj3DxWt/telegram.png" alt="" />{" "}
              <img src="https://i.ibb.co/6XF1cjk/whatsapp.png" alt="" />
            </div>
            +39 3885763408
          </span>{" "}
          <span>
            <div className="logos">
              <img src="https://i.ibb.co/FKWg0Xr/discord.png" alt="" />{" "}
            </div>
            RenieJrDelis
          </span>
        </div>
      </div>
    </div>
  );
}
