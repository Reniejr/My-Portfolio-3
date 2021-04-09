import React from "react";

//UTILITIES IMPORTS
import { socialRedirect } from "./utilities";

//STYLE IMPORTS
import "./Socials.scss";

export default function Socials() {
  return (
    <div id="socials">
      <i
        className="fab fa-github"
        onClick={() => socialRedirect("https://github.com/Reniejr")}
      ></i>
      <i
        className="fab fa-linkedin"
        onClick={() => socialRedirect("https://www.linkedin.com/in/reniejr/")}
      ></i>
      <i
        className="fab fa-instagram"
        onClick={() =>
          socialRedirect("https://www.instagram.com/reniejrdelis/")
        }
      ></i>
    </div>
  );
}
