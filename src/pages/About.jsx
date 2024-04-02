import { LuQuote } from "react-icons/lu";

import profile from "../assets/profile.png";
import frontendImg from "../assets/frontend.png";
import backendImg from "../assets/backend.png";
import webDesigner from "../assets/webdesigner.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import typeScript from "../assets/typescript.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.svg";
import nodeJs from "../assets/node.png";
import mongoDB from "../assets/mongodb.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import npm from "../assets/npm.png";
import php from "../assets/php.png";
import mySQL from "../assets/mysql.png";
import laravel from "../assets/laravel.png";
import sanity from "../assets/sanity.png";
import nextJS from "../assets/nextjs.png";
import java from "../assets/java.png";
import cpp from "../assets/cpp.png";
import androidStudio from "../assets/androidstudio.png";
import nemsu from "../assets/nemsu.png";

const About = () => {
  const frontendTechnologies = [
    { title: "HTML", img: html },
    { title: "CSS", img: css },
    { title: "JS", img: js },
    { title: "React", img: react },
    { title: "TypeScript", img: typeScript },
    { title: "Bootstrap", img: bootstrap },
    { title: "Tailwind", img: tailwind },
  ];

  const backendTechnologies = [
    { title: "MongoDB", img: mongoDB },
    { title: "NodeJS", img: nodeJs },
  ];

  const webDesignTools = [{ title: "Figma", img: figma }];

  const otherTechnologies = [
    { title: "Git", img: git },
    { title: "NPM", img: npm },
  ];

  const familiarTechnologies = [
    { title: "PHP", img: php },
    { title: "MySQL", img: mySQL },
    { title: "Laravel", img: laravel },
    { title: "Sanity", img: sanity },
    { title: "NextJS", img: nextJS },
    { title: "Java", img: java },
    { title: "C++", img: cpp },
    { title: "Android Studio", img: androidStudio },
  ];

  return (
    <section className="spacing container mx-auto">
      <div className="flex flex-col gap-20">
        {/* About Card */}
        <div className="flex flex-col items-center gap-[40px]">
          {/* Title */}
          <h2 className=" capitalize text-black100 md:text-center">
            I know that <span className="text-secondary"> good developer</span>
            <br />
            <span className="capitalize">
              means <span className="text-secondary">good business</span>
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* <div className="flex flex-col justify-between gap-8 lg:flex-row"> */}
            {/* Frontend Card */}
            <div className="flex flex-col gap-4">
              <div className="neomorph-shadow-sm overflow-hidden rounded-xl">
                <img
                  src={frontendImg}
                  alt="FrontEnd"
                  className="h-full w-full"
                />
              </div>
              <div className="neomorph-inset w-full rounded-xl p-4 lg:p-6">
                <h5 className="mb-2 leading-7 tracking-tight text-black100">
                  Front-End Developer
                </h5>
                <p className="mb-2 line-clamp-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  ipsam hic iste excepturi doloremque doloribus veritatis, in
                  repellendus, soluta aperiam qui molestias, blanditiis minima!
                  Vitae id consequuntur itaque! Praesentium, ipsa?
                </p>
                <h6 className="mb-2 text-[16px] tracking-tight text-black75">
                  Technologies
                </h6>
                <div className="flex max-h-16 flex-wrap items-center justify-center gap-4 overflow-y-auto md:max-h-14">
                  {frontendTechnologies.map(({ title, img }) => (
                    <div
                      className="flex flex-col items-center gap-1 lg:gap-2 "
                      key={title}
                    >
                      <div className="neomorph-shadow-sm flex h-10 w-10 items-center justify-center rounded-full p-2 md:h-8 md:w-8">
                        <img src={img} alt={title} />
                      </div>
                      <p className="text-center text-xs">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Backend Card */}
            <div className="flex  flex-col gap-4">
              <div className="neomorph-shadow-sm overflow-hidden rounded-xl">
                <img
                  src={backendImg}
                  alt="FrontEnd"
                  className="h-full w-full"
                />
              </div>
              <div className="neomorph-inset w-full rounded-xl p-4 lg:p-6">
                <h5 className="mb-2 leading-7 tracking-tight text-black100">
                  Back-End Developer
                </h5>
                <p className="mb-2 line-clamp-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  ipsam hic iste excepturi doloremque doloribus veritatis, in
                  repellendus, soluta aperiam qui molestias, blanditiis minima!
                  Vitae id consequuntur itaque! Praesentium, ipsa?
                </p>
                <h6 className="mb-2 text-[16px] tracking-tight text-black75">
                  Technologies
                </h6>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {backendTechnologies.map(({ title, img }) => (
                    <div
                      className="flex flex-col items-center gap-1  lg:gap-2 "
                      key={title}
                    >
                      <div className="neomorph-shadow-sm flex h-10 w-10 items-center justify-center rounded-full p-2 md:h-8 md:w-8">
                        <img src={img} alt={title} />
                      </div>
                      <p className="text-center text-xs">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Web Design Card */}
            <div className="flex  flex-col gap-4">
              <div className="neomorph-shadow-sm overflow-hidden rounded-xl">
                <img
                  src={webDesigner}
                  alt="FrontEnd"
                  className="h-full w-full"
                />
              </div>
              <div className="neomorph-inset w-full rounded-xl p-4 lg:p-6">
                <h5 className="mb-2 leading-7 tracking-tight text-black100">
                  Web Designer
                </h5>
                <p className="mb-2 line-clamp-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  ipsam hic iste excepturi doloremque doloribus Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Alias ipsam hic
                  iste excepturi doloremque doloribus ipsam hic iste excepturi
                  doloremque doloribus Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Alias ipsam hic iste excepturi doloremque
                  doloribus doloremque doloribus Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Alias ipsam hic iste excepturi
                  doloremque doloribus
                </p>
                <h6 className="mb-2 text-[16px] tracking-tight text-black75">
                  Technologies
                </h6>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {webDesignTools.map(({ title, img }) => (
                    <div
                      className="flex flex-col items-center gap-1 lg:gap-2 "
                      key={title}
                    >
                      <div className="neomorph-shadow-sm h-10 w-10 rounded-full p-2 md:h-8 md:w-8">
                        <img src={img} alt={title} className="mx-auto h-full" />
                      </div>
                      <p className="text-center text-xs">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Familiar Technologies */}
        <div className="flex flex-col items-center justify-evenly gap-4 lg:flex-row lg:gap-8">
          <div className="flex flex-col items-center gap-3">
            <h5 className="tracking-tight text-secondary">
              Other Technologies
            </h5>
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-4">
              {otherTechnologies.map(({ title, img }) => (
                <div
                  className="flex flex-col items-center gap-1 lg:gap-2 "
                  key={title}
                >
                  <div className="neomorph-shadow-sm flex h-12 w-12 items-center justify-center rounded-full p-2 md:h-10 md:w-10">
                    <img src={img} alt={title} className="h-full" />
                  </div>
                  <p className="text-center text-sm">{title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h5 className="tracking-tight text-secondary">
              Familiar Technologies
            </h5>
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-4 ">
              {familiarTechnologies.map(({ title, img }) => (
                <div
                  className="flex flex-col items-center gap-1 lg:gap-2 "
                  key={title}
                >
                  <div className="neomorph-shadow-sm flex h-12 w-12 items-center justify-center rounded-full p-2 md:h-10 md:w-10">
                    <img src={img} alt={title} className="w-full" />
                  </div>
                  <p className="text-center text-sm">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* About Me Section */}
        <div className="flex flex-col gap-10">
          <h3 className="text-center text-black100">About me</h3>
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
            <div className="neomorph-inset flex w-[240px] overflow-hidden rounded-lg bg-secondary bg-opacity-20 ">
              <img src={profile} alt="My profile picture" className="" />
            </div>
            <div className="relative flex max-w-[500px] gap-2 leading-6 ">
              <LuQuote
                className=" flex-none text-black50"
                style={{ transform: "rotatey(180deg)" }}
                size={24}
              />
              <p>
                Hello, I'm{" "}
                <span className="font-bold capitalize text-secondary">
                  Sherwin Montañez
                </span>{" "}
                a web developer, I specialize in frontend development, where I
                channel my passion for creating visually captivating websites
                that delight users. My journey in web development is fueled by a
                deep-seated love for crafting new things and an insatiable
                curiosity for discovering innovative solutions. With each
                project, I aim to push boundaries and elevate my skills,
                aspiring to one day be recognized as the best Web Developer in
                the world. Join me as I embark on this exciting adventure of
                creativity and growth in the digital landscape.
              </p>
              <LuQuote className="mt-auto flex-none text-black50" size={24} />
            </div>
          </div>
        </div>
        {/* Educational Background  */}
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-black100">Educational Background</h3>
          <div className="md:gap10 flex flex-col items-center gap-5 md:flex-row">
            <div className="flex h-full max-w-[500px] flex-col items-center justify-between text-center">
              <p className="font-semibold leading-7 tracking-tighter text-black50 ">
                Graduated at North Eastern Mindanao State University
              </p>
              <h5 className="leading-7 tracking-tighter text-secondary">
                Bachelor of Science in Information Technology
              </h5>
            </div>
            <div className="neomorph-shadow w-[240px] rounded-full p-2">
              <img src={nemsu} alt="NEMSU" className="object-fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
