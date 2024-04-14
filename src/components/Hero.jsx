import { LuFileDown } from "react-icons/lu";

import myProfile from "../assets/my-profile.png";
import myResume from "/Sherwin C Montanez Resume-web developer.pdf";

const Hero = () => {
  return (
    <section className="relative flex h-fit flex-col items-center justify-center py-[80px] lg:flex-row lg:p-0">
      <div className="flex flex-col gap-5 ">
        <span className="-space-y-5 text-center lg:text-end">
          <h2 className=" text-black100">Hi I'm</h2>
          <h1 className="text-secondary">
            Sherwin{" "}
            <div className=" inline-block  cursor-none transition duration-300 ease-in-out hover:-rotate-45">
              🖐️
            </div>
          </h1>
        </span>
        <div className="neomorph-shadow-normal w-full rounded-full px-8 py-4 backdrop-blur-sm">
          <span className="text-4xl font-bold text-secondary md:text-6xl">
            Web Developer
          </span>
        </div>
        <div className=" mt-4 flex items-center justify-center">
          <div className="neomorph-outline w-full rounded-xl md:w-fit">
            <a
              href={myResume}
              target="_blank"
              rel="noopener noreferrer"
              download="Sherwin C Montanez Resume-web developer"
            >
              <div className="neomorph-shadow-sm cursor-pointer rounded-lg bg-secondary px-4 py-3 transition-all hover:bg-indigo-600">
                <span className="flex items-center justify-center gap-2 text-lg font-bold text-white ">
                  <LuFileDown strokeWidth={2.5} />
                  Download My Resume
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <img
          src={myProfile}
          alt="My Profile"
          className="
           w-0 lg:w-[400px] "
        />
      </div>
      <div className="  fixed right-0 top-10  -z-10 overflow-hidden opacity-20 lg:hidden">
        <img
          src={myProfile}
          alt="My Profile"
          className="translate-x-[40%] md:translate-x-[25%]"
        />
      </div>
    </section>
  );
};
export default Hero;
