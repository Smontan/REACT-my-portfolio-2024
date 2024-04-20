import { useState } from "react";
import { LuEye, LuGithub } from "react-icons/lu";

import Carousel from "../components/Carousel";
import Modal from "../components/Modal";

const ProjectCard = ({
  title,
  description,
  projectImages,
  technologies,
  category,
  projectLinks,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex w-[336px] flex-col gap-4 rounded-lg bg-white p-3 shadow-lg  md:w-[304px]">
        {/* Project Card image */}
        <div className=" group relative  h-[240px] cursor-pointer overflow-hidden rounded-md ">
          <img
            src={projectImages[0]}
            alt={title}
            className=" h-full w-full object-cover object-top"
          />
          <span className="absolute bottom-0 right-[50%] z-10 w-[104px]  translate-x-[50%] rounded-t-lg bg-white px-3 pt-3 text-center text-sm font-semibold tracking-tight text-black50">
            {category}
          </span>
          <div className="absolute -bottom-10 flex h-full w-full  items-center justify-center gap-8 bg-black75 opacity-0 backdrop-blur-sm  transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
            <a
              href={projectLinks.website}
              target="_blank"
              className="flex flex-col items-center gap-2 cursor-pointer "
            >
              <div className="neomorph-shadow w-fit rounded-full border-slate-50/10 bg-black75 p-3 text-white transition-all duration-300 hover:bg-accent hover:bg-opacity-60">
                <LuEye size={24} />
              </div>
              <span className="text-xs text-white">View Website</span>
            </a>
            <a
              href={projectLinks.github}
              target="_blank"
              className="flex flex-col items-center gap-2 cursor-pointer "
            >
              <div className="neomorph-shadow rounded-full border border-slate-50/10 bg-black75 p-3 text-white transition-all duration-300 hover:bg-accent hover:bg-opacity-60">
                <LuGithub size={24} />
              </div>
              <span className="text-xs text-white">GitHub Repo</span>
            </a>
          </div>
        </div>

        {/* Project Card Detail */}
        <div className="flex flex-col items-center justify-center gap-4 px-4 pb-4">
          <h6 className=" line-clamp-1 w-full  font-semibold capitalize tracking-tighter text-black100">
            {title}
          </h6>
          <p className="line-clamp-3 text-sm text-black75">{description}</p>
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
                {projectImages.map((img, i) => (
                  <img src={img} key={i} className="object-contain " />
                ))}
              </Carousel>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex h-full basis-2/3 flex-col gap-4 bg-black5 p-6  ">
            <div className="flex h-48 flex-col gap-2 overflow-y-auto py-4   md:h-full md:gap-4">
              <h5 className="leading-8 tracking-tighter">{title}</h5>
              <div className="mb-3 flex gap-2">
                <a
                  href={projectLinks.website}
                  target="_blank"
                  className="neomorph-shadow-sm flex items-center justify-center gap-1 rounded bg-secondary p-2 text-xs font-semibold tracking-tighter text-white cursor-pointer"
                >
                  <LuEye />
                  Website
                </a>
                <a
                  href={projectLinks.github}
                  target="_blank"
                  className="neomorph-shadow-sm flex items-center justify-center gap-1 rounded bg-secondary p-2 text-xs font-semibold tracking-tighter text-white cursor-pointer"
                >
                  <LuGithub />
                  GitHub
                </a>
              </div>
              <p className="text-black75">{description}</p>
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
