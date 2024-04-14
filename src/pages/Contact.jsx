import { useState } from "react";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";

import emailImg from "../assets/email.png";
import phone from "../assets/phone.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // EMAIL JS SERVICE ID, TEMPLATE ID AND PUBLIC KEY
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // CREATE A NEW OBJECT THAT CONTAINS DYNAMIC TEMPLATE PARAMS
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Sherwin Montanez",
      message: message,
    };

    // Send email using the emailjs
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS! ", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.log("Error sending your mail: ", error));
  };

  return (
    <section className="spacing container mx-auto">
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-black100">Take a Coffee and Chat with me</h2>
        {/* Contact Information */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex w-full items-center justify-center gap-2  rounded-lg bg-secondary bg-opacity-10  p-2 shadow-md md:p-3 lg:w-fit">
            <div className="h-10 w-10">
              <img src={emailImg} alt="Email" />
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

        {/* EmailJS Contact Form */}
        <form
          className="flex  w-full flex-col justify-center gap-6 md:w-[400px]"
          onSubmit={sendEmail}
        >
          <div className="neomorph-inset inline-block w-full rounded-lg p-2 ">
            <input
              type="text"
              className=" h-[40px] w-full rounded border-none bg-primary px-4 shadow-inner outline-none"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="neomorph-inset inline-block w-full rounded-lg p-2 ">
            <input
              type="email"
              className=" h-[40px] w-full rounded border-none bg-primary px-4 shadow-inner outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="neomorph-inset inline-block w-full rounded-lg p-2 ">
            <textarea
              className="w-full rounded border-none bg-primary px-4 shadow-inner outline-none"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            ></textarea>
          </div>
          <div className="flex w-full justify-end ">
            <button
              className="neomorph-shadow inline-flex w-fit items-center justify-center gap-3 rounded-lg bg-secondary p-3 font-bold text-white transition  hover:bg-opacity-90 md:w-full lg:gap-2 lg:p-4"
              type="submit"
            >
              <LuSend strokeWidth={2} /> Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
