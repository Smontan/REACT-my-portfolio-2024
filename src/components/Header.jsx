import { LuHome, LuLayers, LuPhone, LuUserCircle } from "react-icons/lu";
import { NavLink } from "react-router-dom";

import logo from "../assets/my-profile.png";
import Tooltip from "../components/Tooltip";

const Header = () => {
  const linkList = [
    { path: "/", icon: <LuHome size={20} strokeWidth={2.5} />, title: "Home" },
    {
      path: "/projects",
      icon: <LuLayers size={20} strokeWidth={2.5} />,
      title: "Projects",
    },
    {
      path: "/about",
      icon: <LuUserCircle size={20} strokeWidth={2.5} />,
      title: "About",
    },
  ];
  return (
    <header className="sticky top-0 z-40  px-4 backdrop-blur-lg lg:px-0">
      <nav className="container mx-auto flex items-center justify-between py-3">
        <div>
          <NavLink to="/" className="flex items-center gap-2 overflow-hidden">
            <img
              src={logo}
              alt="Dev Shin logo"
              className=" w-[32px] md:w-[40px] "
            />
            <h4 className="whitespace-nowrap text-base font-bold tracking-tighter text-secondary md:text-2xl">
              Dev Shin
            </h4>
          </NavLink>
        </div>
        <ul className="flex items-center justify-between gap-4 md:gap-6">
          {/* Normal page links */}
          {linkList.map(({ path, icon, title }) => (
            <li
              className="transition-all duration-300 hover:-translate-y-[4px] "
              key={title}
            >
              <NavLinks path={path} icon={icon} name={title} />
            </li>
          ))}

          {/* CTA Button to Contact me page */}
          <li className="neomorph-outline rounded-lg">
            <NavLink to="/contact">
              <span className="neomorph-shadow-sm group relative inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-md bg-accent p-2 text-sm  font-bold text-white  md:p-3 ">
                <LuPhone strokeWidth={3} />
                <span className="hidden md:block">Contact me</span>
                <span className="absolute -right-3 top-11 z-10 scale-0  rounded-lg border-[2px] border-solid border-indigo-300 bg-indigo-100  p-3 text-[16px]  tracking-tight text-indigo-500 transition-all group-hover:scale-100 md:hidden ">
                  Contact me
                </span>
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

const NavLinks = ({ path, icon, name }) => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#313bac" : "#24242bbf",
    };
  };

  return (
    <NavLink to={path} style={navLinkStyle}>
      <div className="group relative inline-flex cursor-pointer items-center gap-1 text-2xl font-bold tracking-tighter hover:text-secondary hover:drop-shadow-lg md:text-lg">
        {icon}
        <span className="hidden md:block">{name}</span>
        <Tooltip title={name} />
      </div>
    </NavLink>
  );
};
