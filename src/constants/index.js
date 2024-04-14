import mernbooking1 from "../assets/projects/mernbooking1.png";
import mernbooking2 from "../assets/projects/mernbooking2.png";
import mernbooking3 from "../assets/projects/mernbooking3.png";
import mernbooking4 from "../assets/projects/mernbooking4.png";
import mernbooking5 from "../assets/projects/mernbooking5.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import typeScript from "../assets/typescript.png";
import tailwind from "../assets/tailwind.svg";
import mongoDB from "../assets/mongodb.png";

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
];
