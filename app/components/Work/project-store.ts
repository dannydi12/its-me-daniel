import kaylaScreenShot from "assets/projects/kayla-divenere.png?url";
import ledScreenShot from "assets/projects/led.png?url";
import memeScreenShot from "assets/projects/meme-generator.png?url";
import wikigraphScreenShot from "assets/projects/wikigraph.png?url";
import landgrabScreenShot from "assets/projects/landgrab.png?url";
import esbScreenShot from "assets/projects/emotional-support-bot.png?url";
// import crosswalkScreenShot from 'assets/projects/crosswalk.png?url'
import npmmScreenShot from "assets/projects/npmm.png?url";
import thoughtbinScreenShot from "assets/projects/thoughtbin.png?url";
import cmmScreenShot from "assets/projects/cmm.png?url";
import portfolioScreenShot from "assets/projects/portfolio.png?url";

const STORE = [
  {
    title: "Artist Profile",
    category: ["other"],
    description:
      "Seeking a new project and an excuse to exercise my design chops, I built and designed an artist profile page for someone I've known for some time.",
    image: kaylaScreenShot,
    languages: ["Gatsby", "HTML", "CSS", "JavaScript"],
    live: "https://kayladivenere.com",
  },
  {
    title: "Pi LED API",
    category: ["other"],
    description:
      "Normal LEDs are boring, so I built a turn-key solution for setting up remotely-controlled WS281x LEDs on a Raspberry Pi with Express for any hobbyist to utilize. Also includes a React front end for ease of use.",
    image: ledScreenShot,
    languages: [
      "Python",
      "Node",
      "Express",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "Mocha",
      "Chai",
      "Jest",
    ],
    repo: "https://github.com/dannydi12/pi-led-server",
    live: "https://github.com/dannydi12/pi-led-client#screenshots",
  },
  {
    title: "Mocking Text Generator",
    category: ["other"],
    description:
      "Typing, 'hElLo WOrLd' takes time, why not let the robots do it for you? This is a satirical web app to generate randomly capitalized text based on the input. Not to be used for psychological warfare.",
    image: memeScreenShot,
    languages: ["HTML", "CSS", "JavaScript", "jQuery"],
    repo: "https://github.com/dannydi12/mocking-text-generator",
    live: "https://dannydi12.github.io/mocking-text-generator/",
  },
  {
    title: "Wikipedia Visualizer",
    category: ["featured"],
    description:
      'Expedite your next "Wikipedia rabbit-hole" by using this compiled database of over 300 million article relationships to interactively explore and traverse all of humanity\'s knowledge.',
    image: wikigraphScreenShot,
    languages: [
      "React",
      "Canvas",
      "Typescript",
      "Express",
      "SQLite",
      "ETL Pipelines",
    ],
    live: "https://wiki.danthebuilder.com/",
  },
  {
    title: "Lahaina Watch",
    category: ["featured"],
    description:
      "Single-night hackathon project to track property sales and acquisitions in Lahaina after the Maui fires. Twitter post went viral with 500k impressions and news coverage.",
    image: landgrabScreenShot,
    languages: ["React", "Typescript", "MapBox"],
    live: "https://landgrabwatch.com/",
  },
  {
    title: "Emotional Support Bot",
    category: ["featured"],
    description:
      "Are you feeling down? Fix all of life's problems with a daily piece of advice. Automatically generated by a bot, as all things should be.",
    image: esbScreenShot,
    languages: [
      "React",
      "HTML",
      "CSS",
      "Typescript",
      "Node",
      "Firebase",
      "Sendgrid",
      "Sadness",
    ],
    live: "https://emotionalsupportbot.com",
  },

  // {
  //   title: "Crosswalk App",
  //   category: ["featured"],
  //   description:
  //     "Your gateway into the unseen world around you. Drop & discover hidden messages wherever you find yourself.",
  //   image: crosswalkScreenShot,
  //   languages: [
  //     "React",
  //     "CapacitorJS",
  //     "HTML",
  //     "CSS",
  //     "Typescript",
  //     "Node",
  //     "MongoDB",
  //   ],
  //   live: "https://www.crosswalkapp.com/",
  // },
  {
    title: "NPMM",
    category: ["featured"],
    description:
      "NPM doesn't let you save packages for later use. This open source project allows developers to save their favorite packages and install them with NPMM's companion CLI.",
    image: npmmScreenShot,
    languages: [
      "React",
      "Redux",
      "Node",
      "PostgreSQL",
      "Express",
      "AJAX",
      "Mocha",
      "Chai",
    ],
    repo: "https://github.com/dannydi12/npmm-client",
    live: "https://npmm.dev",
  },
  {
    title: "ThoughtBin",
    category: ["featured"],
    description:
      "There's a lot going on with Twitter, maybe too much. This frictionless micro-platform allows people to anonymously share and create content. Eliminates emphasis on followers, likes, or reputation.",
    image: thoughtbinScreenShot,
    languages: [
      "React",
      "Node",
      "PostgreSQL",
      "Express",
      "WebSockets",
      "AJAX",
      "Mocha",
      "Chai",
    ],
    repo: "https://github.com/dannydi12/thoughtbin-client",
    live: "https://thoughtbin.danthebuilder.com",
  },
  {
    title: "Chocolate Milk Media",
    category: ["featured"],
    description:
      "A freelance project for a film production company to gain leads. A great case study involving web design and how to be unique on the internet.",
    image: cmmScreenShot,
    languages: ["HTML", "CSS", "JavaScript", "jQuery"],
    repo: "https://github.com/dannydi12/chocolate-milk-media",
    live: "https://chocolatemilkmedia.com",
  },
  {
    title: "My Portfolio",
    category: ["featured"],
    description: "Well, this is really meta...",
    image: portfolioScreenShot,
    languages: ["React", "HTML", "CSS", "JavaScript", "Mocha", "Chai"],
    repo: "https://github.com/dannydi12/its-me-daniel",
    live: "https://danthebuilder.com",
  },
];

export default STORE;
