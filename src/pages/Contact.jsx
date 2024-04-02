import { LuSend } from "react-icons/lu";

import email from "../assets/email.png";
import phone from "../assets/phone.png";

const Contact = () => {
  return (
    <section className="spacing container mx-auto">
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-black100">Take a Coffee and Chat with me</h2>
        {/* Contact Information */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex w-full items-center justify-center gap-2  rounded-lg bg-secondary bg-opacity-10  p-2 shadow-md md:p-3 lg:w-fit">
            <div className="h-10 w-10">
              <img src={email} alt="Email" />
            </div>
            <p className="font-bold text-black75">sherwinmontanez0@gmail.com</p>
          </div>
          <div className="flex w-full items-center justify-center  gap-2 rounded-lg bg-secondary bg-opacity-10  p-2 shadow-md md:p-3 lg:w-fit">
            <div className="h-10 w-10">
              <img src={phone} alt="Phone" />
            </div>
            <p className="font-bold text-black75">+6398-5520-6737</p>
          </div>
        </div>
        <form
          action=""
          className="flex  w-full flex-col justify-center gap-6 md:w-[400px]"
        >
          <div className="neomorph-inset inline-block w-full rounded-lg p-2 ">
            <input
              type="text"
              className=" h-[40px] w-full rounded border-none bg-primary px-4 shadow-inner outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="neomorph-inset inline-block w-full rounded-lg p-2 ">
            <input
              type="text"
              className=" h-[40px] w-full rounded border-none bg-primary px-4 shadow-inner outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="neomorph-inset inline-block w-full rounded-lg p-2 ">
            <textarea
              className="w-full rounded border-none bg-primary px-4 shadow-inner outline-none"
              placeholder="Enter your message"
              rows={4}
            ></textarea>
          </div>
          <div className="flex w-full justify-end ">
            <button className="neomorph-shadow inline-flex w-fit items-center justify-center gap-3 rounded-lg bg-secondary p-3 font-bold text-white transition  hover:bg-opacity-90 md:w-full lg:gap-2 lg:p-4">
              <LuSend strokeWidth={2} /> Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
