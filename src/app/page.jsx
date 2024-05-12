"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}> 
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-y-scroll scrollbar scrollbar-track-[#0f172a] scrollbar-w-3 scrollbar-thumb-[#9cb9ec] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      {/* Image Container */}
      <div className="flex-1 flex items-center justify-center">
        <Image src="/images/world.png" alt="hero image" width={300} height={300} className="object-contain md:animate-breathe responsive-image"/>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col gap-8 justify-center">
        {/* Title */}
        <h1 className="text-4xl text-center font-semibold md:text-6xl 
          bg-gradient-to-r from-sky-500 via-emerald-500 to-indigo-500 animate-gradient-x inline-block 
          text-transparent bg-clip-text">
          Hello World!<br />
          Welcome to my portfolio
        </h1>

        {/* Description */}
        <p className="md:text-xl text-[#9cb9ec] text-opacity-90 text-left">
          Hi my name`s Andres Caicedo! I`m a Software Engineer from Colombia, based in Canada.
          With a strong foundation in software development and a love for system optimization,
          I`ve worked for over three years to improve software functionality and streamline processes.
          My technical skills cover a wide range of computer languages, including C#, C/C++, 
          Python, Javascript and Java. I excel at developing new solutions that improve efficiency 
          and performance. 
        </p>

        {/* Buttons */}
        <div className="w-full flex gap-4 p-8 justify-center">
          <button 
            className="p-4 rounded-lg ring-1 ring-black bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec]" 
            onClick={() => window.location.href = '/projects'}
          >
            View My Work
          </button>
          <button 
            className="p-4 rounded-lg ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]" 
            onClick={() => window.location.href = '/contact'}
          >
            Contact me!
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
