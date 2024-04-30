const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-centers lg:flex-row" style={{ padding: '5rem 5vw' }}>
      {/* Image Container */}
      <div className="relative">
        <img src="/images/world.svg" alt="hero image" fill="true" className="object-contain md:animate-breathe-mid lg:animate-breathe-lg"/>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-8 items-center justify-center" style={{ padding: '3rem 5vw' }}>
        {/* Title */}
        <h1 className="text-4xl text-center font-Ubuntu font-semibold md:text-6xl text-[#9cb9ec] text-opacity-80">Hello World!<br />Welcome to my portfolio</h1>

        {/* Description */}
        <p className="md:text-xl text-[#9cb9ec] text-opacity-80 text-left font-Ubuntu">
          I'm Andres Caicedo, a Software Engineer from Colombia, based in Canada.
          With a strong foundation in software development and a love for system optimization,
          I've worked for over three years to improve software functionality and streamline processes.
          My technical skills cover a wide range of computer languages, including C#, C/C++, 
          Python, Javascript and Java. I excel at developing new solutions that improve corporate efficiency 
          and operational performance. 
        </p>

        {/* Buttons */}
        <div className="flex gap-4 font-Ubuntu" style={{ padding: '3rem 5vw' }}>
          <button className="p-4 rounded-lg ring-1 ring-black bg-[#293444] text-[#9cb9ec] text-opacity-80 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec]">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Contact me!</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
