import { LuFileDown } from "react-icons/lu";

import myProfile from "../assets/my-profile.png";
import myResume from "../../public/Sherwin C Montanez Resume-web developer.pdf";

const Hero = () => {
  return (
    <section className="flex h-fit flex-col items-center justify-center py-[80px] lg:flex-row lg:p-0">
      <div className="flex flex-col gap-5">
        <span className="-space-y-5 text-center lg:text-end">
          <h2 className=" text-black100">Hi I'm</h2>
          <h1 className="text-secondary">Sherwin 🖐️</h1>
        </span>
        <div className="neomorph-shadow w-full rounded-full px-8 py-4">
          <span className="text-4xl font-bold text-secondary md:text-6xl">
            Web Developer
          </span>
        </div>
        <div className=" mt-4 flex items-center justify-center">
          {/* <div className="neomorph-shadow cursor-pointer rounded-xl px-4 py-2  transition-all hover:bg-slate-200">
            <span className="text-lg font-bold text-black100 ">Resume</span>
          </div> */}
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
      <div className=" ">
        <img
          src={myProfile}
          alt="My Profile"
          className="
           w-0 lg:w-[400px] "
        />
      </div>
    </section>
  );
};
export default Hero;
