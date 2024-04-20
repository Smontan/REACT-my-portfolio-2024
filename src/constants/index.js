import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import mongoDB from "../assets/mongodb.png";
import node from "../assets/node.png";
import {
  brainwave1,
  brainwave2,
  brainwave3,
  brainwave4,
  brainwave5,
  brainwave6,
  brainwave7,
  brainwave8,
  mernbooking1,
  mernbooking2,
  mernbooking3,
  mernbooking4,
  mernbooking5,
} from "../assets/projects";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.svg";
import typeScript from "../assets/typescript.png";

export const projects = [
  // title, description, projectImages, technologies, category
  {
    title: "Mern Booking",
    description:
      "This website is created with inspiration from booking.com, the world's leading online accommodation platform. Created Frontend in React with Typescript and including react-datepicker, react-hook-form, react-query, react-router-dom and react-icons, Backend powered by Express in Server, Node.js with Typescript, MongoDB in Database, Cloudinary SDK in saving images and lastly Stripe regarding on Payment transaction.",
    projectImages: [
      mernbooking1,
      mernbooking2,
      mernbooking3,
      mernbooking4,
      mernbooking5,
    ],
    projectLinks: {
      website: "https://mern-booking-hotels.onrender.com/",
      github: "https://github.com/Smontan/MERN-booking-hotels",
    },
    technologies: [
      { title: "HTML", img: html },
      { title: "CSS", img: css },
      { title: "JS", img: js },
      { title: "NodeJs", img: node },
      { title: "React", img: react },
      { title: "TypeScript", img: typeScript },
      { title: "Tailwind", img: tailwind },
      { title: "MongoDB", img: mongoDB },
    ],
    category: "ReactJs",
  },
  {
    title: "Brainwave",
    description:
      "I recently completed a project called Brainwave, inspired by a tutorial from the JavaScript Mastery channel on Youtube. Brainwave is a visually striking UI/UX design website featuring captivating gradient color borders throughout variuos sections, strategically utilizing relative and absolute positioning for precise design control. The hero section boasts a mesmerizing parallax effect, enhancing the appeal of the captivating images. The project is built using the React library with Tailwind CSS, showcasing my skills in front-end development and design",
    projectImages: [
      brainwave1,
      brainwave2,
      brainwave3,
      brainwave4,
      brainwave5,
      brainwave6,
      brainwave7,
      brainwave8,
    ],
    projectLinks: {
      website: "https://devsherwin-brainwave.netlify.app/",
      github: "https://github.com/Smontan/REACT-brainwave",
    },
    technologies: [
      { title: "HTML", img: html },
      { title: "CSS", img: css },
      { title: "JS", img: js },
      { title: "React", img: react },
      { title: "Tailwind", img: tailwind },
    ],
    category: "UI/UX",
  },
];
