//NAVBAR
export const navValues = [
  {
    id: "about",
    name: "About Me",
  },
  {
    id: "projects",
    name: "Projects",
  },
];

//ABOUT NAV
export const aboutNav = [
  {
    id: "my-life",
    name: "My Life",
  },
  {
    id: "skills",
    name: "Skills",
  },
  {
    id: "experience",
    name: "Experiences",
  },
  {
    id: "career-targets",
    name: "Career Targets",
  },
];

//ABOUT PAGE SLIDER
export const aboutSlider = [
  {
    id: "my-life",
    content: `
    Hi,
    My name is Renie Jr, I am a Full Stack Developer graduated in Strive School.
    Before Strive School I did not have any coding experience, but after this journey I can absolutely confirm that I am a real developer.
    Born and actually based in Roma, Italia knowing also as "La Città Eterna" or "Caput Mundi" and of course I am Romano DOC 100%.
    Beside coding I really love sports like football, american football, basketball etc... and sometime I practice combat sports like boxing and krav maga with my friends.
    I really hope you will enjoy this my presentation.
    `,
    bgImage: "https://i.ibb.co/J3VhFtm/colosseum.jpg",
  },
  {
    id: "skills",
    content: `
    Coding Skills?
    I code both FrontEnd and BackEnd part I do not have any preferences, but all people who knows me can say that I am more a FrontEnd developer.
    FrontEnd: HTML5, CSS3, VanillaJS, Bootstrap, ReactJS, React Bootstrap, React Redux, Socket.io, SASS.
    BackEnd: ExpressJS, NodeJS, MongoDB, Postgres, Basic Auth, JWT, OAuth, Socket.io
    Other coding languages: Beginner at Typescript.
    Strong Skills: CSS/SASS Animations, ExpressJS
    `,
    bgImage: "https://i.ibb.co/pdwBcgQ/coding.jpg",
  },
  {
    id: "experience",
    content: `
    In my job career I have worked as bartender, for almost 2 years, where I learnt how to interact with people and of course how to make cocktails.
    As a pizza-maker, job that I loved because i love pizza, but I cannot do any tricks on making it.
    And now I am looking for a job position as a web developer.
    `,
    bgImage: "https://i.ibb.co/8xTbwkj/bartender.jpg",
  },
  {
    id: "career-targets",
    content: `
    "Never Stop Learning",
    this is my motto, not only about job career but even in life in general.
    After Strive School, I do not want to stop my coding journey, so I set some targets that I want to reach for now:
    1. Master canvas.
    2. 3D web rendering (with three.js).
    3. Improve my cyber-security skills.
    `,
    bgImage: "https://i.ibb.co/grXMPZ6/targets.jpg",
  },
];

//PROJECT PAGE NAV
export const projectNav = [
  {
    id: "strive-web",
    name: "Strive Website",
  },
  {
    id: "weather-app",
    name: "TS Weather App",
  },
  {
    id: "strivify",
    name: "StriviFy",
  },
];

//PROJECT PAGE SLIDER
export const projectSlider = [
  {
    id: "strive-website",
    content: "New Platform for Strive School to show my gratitude to them",
    liveLink: "https://strive-school.herokuapp.com/",
    completed: true,
    githubLink: "https://github.com/Reniejr/Strive-Website-FE",
    bgImage: "./assets/striveWeb.mp4",
  },
  {
    id: "Weather App",
    content: "Weather App made on Typescript",
    liveLink: "https://reniejr.github.io/ts-weather-app/#/",
    completed: true,
    githubLink: "https://github.com/Reniejr/ts-weather-app",
    bgImage: "./assets/weather.mp4",
  },
  {
    id: "Strivify",
    content: "Spotify Clone with Spotify API",
    liveLink: "https://reniejr.github.io/StriviFy/#/",
    completed: false,
    githubLink: "https://github.com/Reniejr/StriviFy/",
    bgImage: "./assets/strivify.mp4",
  },
];

//NAV QUERIES
export const navQuery = () => {
  const width = window.innerWidth;
  const queries = [
    {
      size: 1365,
      nav: 200,
    },
  ];
  console.log(width);
  const query = queries.find((q) => q.size <= width);
  console.log(query);
  if (query) {
    return query;
  }
};
