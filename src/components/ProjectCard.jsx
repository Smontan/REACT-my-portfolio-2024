import { Link } from "react-router-dom";
import { LuEye, LuGithub } from "react-icons/lu";
import { useState } from "react";

import Modal from "../components/Modal";
import Carousel from "../components/Carousel";

import bookingImg from "../assets/booking-app.png";
import website from "../assets/website.jpg";
import website2 from "../assets/website2.png";
import website3 from "../assets/website3.png";
import website4 from "../assets/website4.png";
import website5 from "../assets/website5.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import typeScript from "../assets/typescript.png";

const ProjectCard = () => {
  const [open, setOpen] = useState(false);
  const technologies = [
    { title: "HTML", img: html },
    { title: "CSS", img: css },
    { title: "JS", img: js },
    { title: "NodeJs", img: node },
    { title: "React", img: react },
    { title: "TypeScript", img: typeScript },
  ];

  const images = [bookingImg, website, website, website, website, website];

  return (
    <>
      <div className="flex w-[336px] flex-col gap-4 rounded-lg bg-white p-3 shadow-lg  md:w-[304px]">
        {/* Project Card image */}
        <div className=" group relative  h-[240px] cursor-pointer overflow-hidden rounded-md ">
          <img
            src={bookingImg}
            alt="Booking Web App"
            className="h-full w-full"
          />
          <span className="absolute bottom-0 right-[50%] z-10 w-[104px]  translate-x-[50%] rounded-t-lg bg-white px-3 pt-3 text-center text-sm font-semibold tracking-tight text-black50">
            Web App
          </span>
          <div className="absolute -bottom-10 flex h-full w-full  items-center justify-center gap-8 bg-black75 opacity-0 backdrop-blur-sm  transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
            <Link to="#" className="flex flex-col items-center gap-2 ">
              <div className="neomorph-shadow w-fit rounded-full border-slate-50/10 bg-black75 p-3 text-white transition-all duration-300 hover:bg-accent hover:bg-opacity-60">
                <LuEye size={24} />
              </div>
              <span className="text-xs text-white">View Website</span>
            </Link>
            <Link to="#" className="flex flex-col items-center gap-2 ">
              <div className="neomorph-shadow rounded-full border border-slate-50/10 bg-black75 p-3 text-white transition-all duration-300 hover:bg-accent hover:bg-opacity-60">
                <LuGithub size={24} />
              </div>
              <span className="text-xs text-white">GitHub Repo</span>
            </Link>
          </div>
        </div>

        {/* Project Card Detail */}
        <div className="flex flex-col items-center justify-center gap-4 px-4 pb-4">
          <h6 className=" line-clamp-1 w-full  font-semibold capitalize tracking-tighter text-black100">
            My project
          </h6>
          <p className="line-clamp-3 text-sm text-black75">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            itaque magni nemo eum cupiditate repudiandae hic voluptatem mollitia
            consectetur voluptatum.
          </p>
          <div className="flex w-full justify-end">
            <button
              className="neomorph-shadow rounded-lg bg-secondary px-6 py-3 font-bold text-white hover:bg-opacity-90 md:text-sm"
              onClick={() => setOpen(true)}
            >
              See more details
            </button>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex h-full flex-col md:flex-row">
          {/* Project Carousel Images */}
          <div className="h-full w-full bg-secondary bg-opacity-80 p-4  transition-all ease-in-out hover:bg-opacity-90 md:p-6">
            <div className=" mx-auto h-[15rem] max-w-xl overflow-hidden md:h-full">
              <Carousel>
                {images.map((img, i) => (
                  <img src={img} key={i} className="object-contain" />
                ))}
              </Carousel>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex h-full basis-2/3 flex-col gap-4 bg-black5 p-6  ">
            <div className="flex h-48 flex-col gap-2 overflow-y-auto py-4   md:h-full md:gap-4">
              <h5 className="leading-8 tracking-tighter">My Project</h5>
              <div className="mb-3 flex gap-2">
                <button className="neomorph-shadow-sm flex items-center justify-center gap-1 rounded bg-secondary p-2 text-xs font-semibold tracking-tighter text-white">
                  <LuEye />
                  Website
                </button>
                <button className="neomorph-shadow-sm flex items-center justify-center gap-1 rounded bg-secondary p-2 text-xs font-semibold tracking-tighter text-white">
                  <LuGithub />
                  GitHub
                </button>
              </div>
              <p className="text-black75">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem, ut architecto. Recusandae fuga nulla maiores et
                debitis alias architecto aut sint in voluptatum, similique
                earum! Corrupti impedit adipisci magnam repellat? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Ad nostrum
                voluptates, a magni in est obcaecati labore iure quaerat quod
                sapiente, cum quam quidem libero harum ipsam repellendus illum
                unde quia fugiat consequuntur, molestias itaque enim! Laudantium
                unde odio dicta ad quasi? Cum magnam officiis voluptatem. Nisi
                cum tenetur quisquam iure temporibus tempora molestias quam
                voluptas sequi ut id dignissimos veritatis modi sunt, ipsa non
                earum! Corrupti impedit adipisci magnam repellat? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Ad nostrum
                voluptates, a magni in est obcaecati labore iure quaerat quod
                sapiente, cum quam quidem libero harum ipsam repellendus illum
                unde quia fugiat consequuntur, molestias itaque enim! Laudantium
                unde odio dicta ad quasi? Cum magnam officiis voluptatem. Nisi
                cum tenetur quisquam iure temporibus tempora molestias quam
                voluptas sequi ut id dignissimos veritatis modi sunt, ipsa non
              </p>
            </div>
            <div className="flex flex-col gap-1  md:gap-2">
              <h6 className="tracking-tighter">Technologies</h6>
              <ul className="flex max-h-12 flex-wrap items-center  space-x-2 space-y-1 overflow-y-auto md:space-x-3">
                {technologies.map(({ title, img }, index) => (
                  <li
                    className="inline-flex w-fit items-center justify-center space-x-1 drop-shadow"
                    key={index}
                  >
                    <div className="h-4 w-4">
                      <img src={img} alt={title} className="h-full w-full" />
                    </div>
                    <p className="text-sm font-semibold text-black50">
                      {title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ProjectCard;
