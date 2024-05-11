"use client"
import {motion, useInView, useScroll} from "framer-motion";
import Brain from "../../components/brain";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "50px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "50px" });

  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}} 
      animate={{y:"0%"}} 
      transition={{duration:1}}
    > 
    <div className="h-full lg:flex overflow-auto scrollbar scrollbar-track-[#0f172a] scrollbar-w-3 scrollbar-thumb-[#9cb9ec] scrollbar-thumb-rounded-full scrollbar-track-rounded-full" ref={containerRef}>
      {/* TEXT CONTAINER */}
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-30 flex flex-col gap-24 md:gap-32 lg:gap-40 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
        {/* BIOGRAPHY SECTION */}
        <div className="flex flex-col gap-12 justify-center text-[#9cb9ec] text-opacity-90">
          {/* Biography Image */}
          <Image
            src="/images/me.png"
            alt="profile picture"
            width={600}
            height={600}
            className="w-80 h-80 rounded-full object-cover"
          />
          {/* Quote */}
          <div>
            <span className="italic">"It always seems impossible until it's done."</span><br/>
            <span>-Nelson Mandela</span>
          </div>
          {/* Biography */}
          <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
          <p className="text-lg">
            I embarked on my professional journey by pursuing a degree in biomechanics, which I completed in 2014. During my final year, I had the privilege of conducting my clinical practicum at Mosaic Health Care Network, gaining invaluable hands-on experience.
          </p>
          <p className="text-lg">
            I joined the Human Performance Laboratories (HPL) as a Biomechanics research assistant in late 2013, where I contributed for three years until 2016. Concurrently, I also served as a research assistant for the Sports Injury Clinic from 2013 to 2016.
          </p>
          <p className="text-lg">
            Despite my dedication to research, I felt a calling for a different path. With my partner by my side, we ventured abroad and taught English from 2016 to 2017, a transformative experience that broadened my horizons.
          </p>
          <p className="text-lg">
            Upon returning and with encouragement from my family, I decided to pivot towards a Software Engineering career, a field that had always intrigued me. I began my transition by working as a specialized support technician at the University of Calgary's IT department, where I immersed myself in the world of technology while pursuing my full-time studies in software engineering.
          </p>
          <p className="text-lg">
            My tenure at the University's IT department spanned from 2019 to 2022, during which I honed my skills and prepared for the next phase of my career. In 2022, I seized the opportunity to intern at Unity Technologies, a decision that solidified my passion for software development.
          </p>
          <p className="text-lg">
            Following my internship, I was thrilled to join Unity full time as a Software Development Engineer in Test (SDET) in the Industry & Digital Twin department. I am dedicated to learning, always eager to collaborate, and known for my strong work ethic.
          </p>
          <p className="text-lg">
            Outside of work, I enjoy exploring new restaurants, spending time with my cats, and enjoying shows with my wife. I also have a deep appreciation for sports, particularly soccer, hockey, and basketball, both as a player and a spectator.
          </p>
          {/* Signature */ }
          <div className="self-end">
            <svg width="250" height="100" viewBox="0 0 839 460" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M212 307C234.877 307.763 253.902 302.886 271.944 287.556C281.992 279.018 290.66 267.598 295.278 255.167C295.705 254.017 300.586 229.421 294.889 233C289.484 236.395 285.751 244.984 283.333 250.444C277.298 264.076 270.896 280.924 272.222 296.111C274.348 320.462 300.428 304.289 307.333 292.167C309.942 287.587 311.594 282.702 311.944 277.444C312.253 272.823 305.342 282.713 305.222 282.889C300.933 289.202 295.853 299.528 299.222 307.278C300.755 310.803 304.65 310.133 307 307.889C311.845 303.261 314.124 290.463 311.5 284.167C311.023 283.022 309.335 292.302 309.222 293C308.565 297.052 308 301.164 308 305.278C308 307.409 308.042 301.012 308.222 298.889C309.819 280.125 316.532 262.361 326.333 246.333C342.872 219.288 365.116 195.135 389.889 175.444C401.927 165.876 417.826 155.476 431.667 148.556C437.772 145.503 463.51 131.551 471.889 138.778C477.311 143.454 467.512 155.494 466.722 156.611C456.936 170.457 445.517 181.208 432.722 192.444C387.177 232.443 334.74 263.417 282.556 293.778C277.656 296.628 256.174 308.831 249.333 313.444C247.864 314.435 245.908 315.269 245.333 316.944C243.895 321.14 254.148 315.577 258.333 314.111C297.507 300.392 335.198 282.673 374.333 268.778C394.859 261.49 415.827 255.66 437.222 251.556C438.387 251.332 447.739 249.467 450.556 250.111C453.384 250.758 450.816 256.293 450.556 257.333C442.439 289.8 506.658 277.353 521.389 272.389C523.497 271.678 559.748 256.148 548.556 250.222C543.739 247.672 542.568 251.811 539 253" stroke="#9CB9EC" strokeWidth="3" strokeLinecap="round"/>
              <path d="M495 177C495.611 181.886 502.661 173.567 503 173C505.408 168.971 515.573 148.31 503.778 151.889C487.257 156.902 473.09 169.822 461.889 182.444C450.702 195.052 440.268 208.694 432.056 223.444C425.844 234.6 417.814 250.273 420.222 263.778C424.464 287.561 457.715 273.458 468.111 264.556C480.5 253.947 493.203 241.948 497 226" stroke="#9CB9EC" strokeWidth="3" strokeLinecap="round"/>
              <path d="M164 396C164 370.292 165.975 345.715 172.833 320.722C190.603 255.969 216.887 191.438 251 133.556C266.355 107.501 286.066 79.601 313.333 64.7778C316.139 63.2524 320.891 60.8508 324.556 60.7222C328.691 60.5771 328.58 67.8733 328.778 70.2222C331.109 97.9039 326.454 125.909 319.5 152.611C295.952 243.035 230.031 321.258 154.056 373.278C135.805 385.774 116.906 395.948 95.7778 402.611C85.7049 405.788 78.6883 407.609 68.4444 409.333C66.0136 409.743 52.349 412.723 49.1111 410.333C47.1742 408.904 53.0665 407.477 55.3333 406.667C75.4422 399.476 96.726 394.71 117.389 389.611C206.653 367.583 295.428 345.066 383.444 318.333C486.166 287.135 588.014 253.144 690.667 221.722C720.499 212.591 741.149 206.368 769.833 198.333C776.254 196.535 795.763 192.546 789.111 193C777.542 193.789 764.81 200.626 754.222 204.833C745.017 208.491 736.532 213.023 728 218" stroke="#9CB9EC" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          {/* Biography Scroll SVG */}
          <div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              >
              <path d="M12 6V14" stroke="#9CB9EC" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#9CB9EC" strokeWidth="1"></path>
            </motion.svg>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="flex flex-col gap-12 justify-center text-[#9cb9ec] text-opacity-90" ref={skillRef}>
          <motion.h1 
            initial={{x:"-300-px"}} 
            animate={isSkillRefInView ? {x:0} : {}} 
            transition={{delay:0.2}} 
            className="font-bold text-2xl">SKILLS
          </motion.h1>
          {/* Skill List */}
          <motion.div 
            className="flex gap-4 flex-wrap"
            initial={{x:"-300-px"}} 
            animate={isSkillRefInView ? {x:0} : {}} 
            >  
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">JavaScript</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">TypeScript</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Node.js</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">React.js</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Next.js</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">C/C++</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">C#</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Java</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Python</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Unity</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Rust</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Go</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Postman</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">PosgreSQL</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">SQLite</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">GraphQL</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">MySQL</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">NoSQL</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">MongoDB</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Jenkins</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Github Actions</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Microsoft Azure</div>          
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Framer Motion</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Microsoft Azure</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">MATLAB</div>
              <div className="rounded p-2 text-sm ring-1 ring-black bg-[#9cb9ec] text-[#0f172a] hover:bg-[#9cb9ec] hover:bg-opacity-60 hover:text-[#0f172a]">Active Directory</div>
            </motion.div>
          {/* Skill Scroll SVG */}
          <div>
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              >
              <path d="M12 6V14" stroke="#9CB9EC" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#9CB9EC" strokeWidth="1"></path>
            </motion.svg>
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="flex flex-col gap-12 justify-center pb-48 text-[#9cb9ec] text-opacity-90" ref={experienceRef}>
          <motion.h1 
              className="font-bold text-2xl"
                initial={{x:"-300-px"}}
                animate={isExperienceRefInView ? {x:0} : {}}
                transition={{delay:0.2}}
          >WORK HISTORY</motion.h1>
          {/* Experience List */}
          <motion.div
              initial={{x:"-300-px"}}
              animate={isExperienceRefInView ? {x:0} : {}}
              className=""
          >
            {/* Item */}
            <div className="flex justify-between h-48">
              {/* Left */}
              <div className="w-1/3">
                <div className="bg-[#9cb9ec] p-2 font-semibold rounded-b-lg rounded-s-lg text-[#222f42] text-center">Software Developer Engineer</div>
                <div className="p-2 text-sm italic">
                  Industry and Digital Twins
                </div>
                <div className="p-2 text-sm font-semibold">Mar 2022 - Current</div>
                <Link className="rel=noopener noreferrer" target="_blank" href="https://unity.com/our-company">
                  <button className="p-2 rounded bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec] tex-sm font-semibold w-fit ring-1 ring-black">
                    Unity Technologies
                  </button>
                </Link>
              </div>
              {/* Center */}
              <div className="w-1/6 ">
                {/* Line */}
                  <div className="w-1 h-full bg-[#9cb9ec] rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-emerald-300 bg-[#9cb9ec] -left-2"></div>  
                  </div>
              </div>
              {/* Right */}
              <div className="w-1/3"></div>
            </div>
            {/* Item */}
            <div className="flex justify-between h-48">
              {/* Left */}
              <div className="w-1/3"></div>
              {/* Center */}
              <div className="w-1/6 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-[#9cb9ec] rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-emerald-400 bg-[#9cb9ec] -left-2"></div>  
                  </div>
              </div>
              {/* Right */}
              <div className="w-1/3">
              <div className="bg-[#9cb9ec] p-3 font-semibold rounded-b-lg rounded-tr-lg text-[#222f42] text-center">Computer Support Technician</div>
                <div className="p-3 text-sm italic">Arts IT</div>
                <div className="p-3 text-[#9cb9ec] text-sm font-semibold">Jul 2019 - Apr 2022</div>
                <Link className="rel=noopener noreferrer" target="_blank" href="https://www.ucalgary.ca/">
                  <button className="p-2 rounded bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec] tex-sm font-semibold w-fit ring-1 ring-black">
                    University of Calgary
                  </button>
                </Link>
              </div>
            </div>
            {/* Item */}
            <div className="flex justify-between h-48">
              {/* Left */}
              <div className="w-1/3">
                <div className="bg-[#9cb9ec] p-3 font-semibold rounded-b-lg rounded-s-lg text-[#222f42] text-center">English Teacher</div>
                <div className="p-3 text-sm italic">Oxford Seminars</div>
                <div className="p-3 text-[#9cb9ec] text-sm font-semibold">Sep 2016 - Oct - 2017</div>
                <Link className="rel=noopener noreferrer" target="_blank" href="https://shaneschools.com/">
                <button className="p-2 rounded bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec] tex-sm font-semibold w-fit ring-1 ring-black">
                  Shane School - China
                  </button>
                </Link>
              </div>
              {/* Center */}
              <div className="w-1/6 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-[#9cb9ec] rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-emerald-300 bg-[#9cb9ec] -left-2"></div>  
                  </div>
              </div>
              {/* Right */}
              <div className="w-1/3"></div>
            </div>
            {/* Item */}
            <div className="flex justify-between h-48">
              {/* Left */}
              <div className="w-1/3"></div>
              {/* Center */}
              <div className="w-1/6 ">
                {/* Line */}
                <div className="w-1 h-full bg-[#9cb9ec] rounded relative">
                  {/* Circle */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-emerald-400 bg-[#9cb9ec] -left-2"></div>
                </div>
              </div>
              {/* Right */}
              <div className="w-1/3">
                <div className="bg-[#9cb9ec] p-3 font-semibold rounded-b-lg rounded-tr-lg text-[#222f42] text-center">Biomechanics Research assistant</div>
                <div className="p-3 text-sm italic">Sport and Prevention Injury Clinic</div>
                <div className="p-3 text-[#9cb9ec] text-sm font-semibold">Jan 2013 - Sep 2016</div>
                <Link className="rel=noopener noreferrer" target="_blank" href="https://kinesiology.ucalgary.ca/research/labs-and-centres/human-performance-lab">
                  <button className="p-2 rounded bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec] tex-sm font-semibold w-fit ring-1 ring-black">
                    Human Performance Lab
                  </button>
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
      {/* SVG CONTAINER */}
      <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
        <Brain scrollYProgress={scrollYProgress} />
      </div>
    </div>
    </motion.div>
  )
}

export default AboutPage