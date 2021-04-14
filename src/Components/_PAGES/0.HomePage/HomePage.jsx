import React, { useState, useEffect } from "react";

//PERSONAL COMPONENTS IMPORTS
import { BgLayout } from "Components/_MAIN/_Backgrounds/Backgrounds";
import Slider from "./_Slider/Slider";
import Navbar from "../../_MAIN/Navbar/Navbar";
import Controllers from "../../_MAIN/Controllers/Controllers";
import Socials from "../../_MAIN/Socials/Socials";
import { ArrowsControllers } from "../../_MAIN/Controllers/Controllers";

//STYLE IMPORTS
import "./HomePage.scss";

export default function HomePage() {
  const [show, setShow] = useState(false);
  const [slideShow, setSlideShow] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <div id="home-page">
      <Navbar state={{ slideShow }} functions={{ setSlideShow }} />
      <Socials />
      <p className="signature">Junior Del is</p>
      <BgLayout />
      <Slider state={{ show, slideShow }} />
      <Controllers state={{ slideShow }} functions={{ setSlideShow }} />
      <ArrowsControllers state={{ slideShow }} functions={{ setSlideShow }} />
    </div>
  );
}
