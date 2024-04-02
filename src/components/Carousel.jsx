import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className=" relative flex h-full items-center ">
      <div
        className="flex  transition-all duration-300 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4">
        <button
          className="neomorph-shadow-sm rounded-full bg-primary p-2 text-black75 opacity-20 transition-all duration-300 hover:bg-white hover:opacity-100 lg:p-3"
          onClick={prev}
        >
          <LuChevronLeft />
        </button>
        <button
          className="neomorph-shadow-sm rounded-full bg-primary p-2 text-black75 opacity-20 transition-all duration-300 hover:bg-white hover:opacity-100 lg:p-3"
          onClick={next}
        >
          <LuChevronRight />
        </button>
      </div>
      <div className="absolute bottom-2 left-0 right-0 md:bottom-6">
        <div className="flex h-4 items-center justify-center gap-2">
          {/* Slide Indicators */}
          {slides.map((_, i) => (
            <div
              className={`rounded-full bg-white opacity-90 transition-all ease-out ${
                curr === i ? "p-1.5" : "p-1"
              }`}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Carousel;
