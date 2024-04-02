import {
  LuPenTool,
  LuAppWindow,
  LuSmartphone,
  LuLayoutGrid,
} from "react-icons/lu";
import { FaReact } from "react-icons/fa6";

import Tooltip from "../components/Tooltip";
import ProjectCard from "../components/ProjectCard";
import Carousel from "../components/Carousel";

const Projects = () => {
  const projectCategories = [
    {
      title: "UI/UX",
      icon: <LuPenTool strokeWidth={2} />,
      textColor: "text-black75",
    },
    {
      title: "Web App",
      icon: <LuAppWindow strokeWidth={2.5} />,
      textColor: "text-black75",
    },
    {
      title: "Mobile App",
      icon: <LuSmartphone strokeWidth={2.5} />,
      textColor: "text-black75",
    },
    {
      title: "React Js",
      icon: <FaReact strokeWidth={2.5} />,
      textColor: "text-black75",
    },
    {
      title: "All",
      icon: <LuLayoutGrid strokeWidth={2.5} />,
      bgColor: "bg-secondary",
      bgHoverColor: "bg-indigo-200",
      textColor: "text-white",
    },
  ];
  return (
    <section className=" spacing container mx-auto">
      <div className="flex flex-col items-center gap-[40px]">
        <h2 className="capitalize text-black100">
          My Creative <span className="text-secondary">Projects</span>
        </h2>

        {/* Project Category UI/UX, Web App, Mobile App, React Js*/}
        <ul className="flex items-center justify-center gap-4 lg:gap-12">
          {projectCategories.map((category) => (
            <li key={category.title}>
              <ProjectCategory {...category} />
            </li>
          ))}
        </ul>

        {/* Poject Card */}
        <div className=" w-full flex-wrap items-center justify-center gap-4 flex">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        
      </div>
    </section>
  );
};
export default Projects;

const ProjectCategory = ({
  title,
  icon,
  bgColor = "bg-primary",
  bgHoverColor = "hover:bg-slate-100",
  textColor,
}) => {
  return (
    <span
      className={`neomorph-shadow cursor-pointer rounded-xl p-4 ${bgColor} ${bgHoverColor} ${textColor} group relative flex items-center justify-center gap-2 font-bold transition-all hover:bg-blend-overlay`}
    >
      {icon}
      <span className=" hidden text-center md:block">{title}</span>
      <Tooltip title={title} />
    </span>
  );
};
