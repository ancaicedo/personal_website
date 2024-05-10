"use client";
import { motion } from "framer-motion";
import {useEffect, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import autosize from 'autosize';
import GreetingAnimation from "@/components/greetingAnimation";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const randomDelay = () => Math.random() * 2 + 8;
  const form = useRef();
  const textareaRef = useRef();

  useEffect(() => {
    // Apply autosize to the textarea
    autosize(textareaRef.current);
  }, []);
  
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-evenly gap-y-20s overflow-hidden">
          <div className="flex justify-center lg:justify-start" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="flex justify-center lg:justify-end" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="flex justify-center lg:justify-start" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="lg:flex justify-end hidden" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="lg:flex justify-start hidden" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="lg:flex justify-end hidden" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="lg:flex justify-start hidden" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="lg:flex justify-end hidden" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="lg:flex justify-start hidden" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="lg:flex justify-end hidden" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="lg:flex justify-start hidden" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="lg:flex justify-end hidden" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
          <div className="lg:flex justify-start hidden" style={{padding: '0 calc(5vw + 10px)'}}>
            <GreetingAnimation delay={randomDelay()}/>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
            onSubmit={sendEmail}
            ref={form}
            className="h-1/2 lg:h-full lg:w-1/2 text-opacity-90 text-lg flex flex-col space-y-2 w-fit mx-auto justify-center"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 justify-center">
            <input placeholder="Name" className="contact-input placeholder:text-gray-500 md:w-1/2" name="name"
                   type="text"/>
            <input placeholder="Email" className="contact-input placeholder:text-gray-500 md:w-1/2" name="email"
                   type="email"/>
          </div>
          <input placeholder="Subject" className="flex justify-center contact-input placeholder:text-gray-500"
                 name="subject" type="text"/>
          <textarea 
              placeholder="Message" 
              className=" contact-input placeholder:text-gray-500 lg:h-72 h-64 overflow-auto max-h-[900px] z-10"
              name="message"
              ref={textareaRef}
          ></textarea>
          <button
              className="p-4 rounded-lg ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Submit
          </button>
          {success && (
              <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
              </span>
          )}
          {error && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;