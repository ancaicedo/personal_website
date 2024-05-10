"use client"
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Image from "next/image";
import Link from "next/link";

const publications = [
    {
      id: 1,
      color: "from-[#1f2b3b] to-[#121c33]",
      title: "Adaptive Bandwidth Throttling for Telus",
      desc: `I served as the technical lead for the Adaptive Bandwidth Throttling project with TELUS Communications. 
            My role involved overseeing project infrastructure, developing design patterns, and implementing new features. 
            Our collaboration resulted in a successful solution that significantly improved user experience and garnered 
            recognition from TELUS executives and coverage in a University of Calgary publication.`,
      img: "/images/Telus.png",
      link: "https://schulich.ucalgary.ca/news/schulich-capstone-team-impresses-industry-partner-mobile-network-solution",
    },
    {
      id: 2,
      color: "from-[#1f2b3b] to-[#121c33]",
      title: "Research on Force Depression in Muscle Fiber Types",
      desc: `I was part of a research team studying force depression in different muscle fibers. 
            We used rabbit muscles to measure force changes during active fiber shortening. 
            By analyzing the data and coding tools for extraction, we found that Type II fibers 
            have greater force depression than Type I fibers when shortening at a certain speed. 
            However, this difference disappears when they shorten at the same relative speed, suggesting 
            it's due to their unique force-velocity relationships rather than intrinsic differences.`,
      img: "/images/research.png",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0021929015003127",
    },
  ];

const projects = [
    {
    id: 1, 
    color: "from-[#1f2b3b] to-[#121c33]",
    title: "Queso Automation Framework",
    desc: `I collaborated on the development of the Queso Automation Framework, 
            a Full Stack Automation framework in C# for the Unity Engine. 
            This framework set a new standard for our Quality Engineering team and 
            has become a key automation tool for all Unity projects. I successfully 
            implemented this framework in multiple projects across various platforms.`,
    img: "/images/automation.jpg",
    link: "https://unity.com/how-to/automated-tests-unity-test-framework",
    },
    {
    id: 2,
    color: "from-[#1f2b3b] to-[#121c33]",
    title: "Airport Digital Twin Solution",
    desc: `I was a Software Developer Engineer in Test for this project. In this role, 
            I implemented the Automation framework to run Editor mode and Play mode tests and added them 
            to the build pipeline. Additionally, I significantly contributed to the setup and maintenance of 
            the CI/CD pipeline. Our work on this project at Vancouver International Airport (YVR) showcases the 
            power of digital twin technology in revolutionizing airport operations.`,
    img: "/images/yvr.png",
    link: "https://blog.unity.com/industry/how-digital-twins-are-transforming-large-scale-airports",
    },
    {
    id: 3,
    color: "from-[#1f2b3b] to-[#121c33]",
    title: "VRChat Android Port",
    desc: `I was part of the team that collaborated with the VRChat team to port the application to mobile platforms. 
            My role focused on testing and automation, contributing to the successful adaptation of the application for mobile use. 
            I played a key role in ensuring its functionality and performance on mobile devices were up to standard.`,
    img: "/images/vrchat.png",
    link: "https://hello.vrchat.com/blog/mobile-alpha-now-live",
    },
    {
    id: 4,
    color: "from-[#1f2b3b] to-[#121c33]",
    title: "AppleTV Prehistoric Planet Immersive",
    desc: `I played a key role in a confidential film production project for the Apple TV+ show "Prehistoric Planet," 
            aimed at creating a VR experience for the unreleased Apple Vision Pro. As an automation engineer, I developed 
            tools in Python to track the progress of the render farm and analyze faults in the build pipeline. These tools 
            included a log parser and statistic extractor for each node, as well as graphing tools for monitoring memory usage, 
            frames rendered, VRAM usage, and more. This project was a unique and exciting opportunity to blend technology and storytelling.`,
    img: "/images/apple.jpg",
    link: "https://www.apple.com/tv-pr/news/2024/01/apple-tv-unveils-groundbreaking-immersive-originals-from-todays-biggest-storytellers-set-to-debut-on-apple-vision-pro/",
    },
    {
    id: 5,
    color: "from-[#1f2b3b] to-[#121c33]",
    title: "Maloka VR",
    desc: `I was part of the team working on the Maloka VR application, where I focused on testing and automation. 
            Unlike previous projects, I was also involved in the CI/CD pipeline, ensuring smooth deployment and integration processes. 
            For automated testing, I used GameDriver and Cypress, contributing to the application's quality and efficiency.`,
    img: "/images/maloka.jpg",
    link: "https://www.playmaloka.com/about",
    },
];



const ProjectsPage = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref});
    // TODO: Scroll depends on a hardcoded value, need to standardize this
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
    return (
    <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration:1}}
    >
        {/* Title Section */} 
        <div className="h-[600vh] relative" ref={ref}>
            <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center text-[#9cb9ec] text-opacity-90 relative">
                <div className="flex-grow flex flex-col justify-center">
                    Scroll to see my work!
                </div>
                <div className="absolute bottom-0 mb-10">
                    <motion.svg
                        initial={{opacity: 0.2, y: 0}}
                        animate={{opacity: 1, y: "10px"}}
                        transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={100}
                        height={100}
                    >
                        <path d="M12 6V14" stroke="#9CB9EC" strokeWidth="1.5"></path>
                        <path d="M15 11L12 14L9 11" stroke="#9CB9EC" strokeWidth="1.5"></path>
                    </motion.svg>
                </div>
            </div>
            
            {/* Projects Section */}
            <div className="sticky top-0 flex h-screen gap-8 items-center overflow-hidden">
                <motion.div style={{x}} className="flex">\
                    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-[#1f2b3b] to-[#121c33]"/>
                    <div className="text-8xl text-center text-[#9cb9ec] text-opacity-90 h-screen w-screen flex items-center justify-center bg-gradient-to-b from-[#1f2b3b] to-[#121c33]">
                        Projects Involved
                    </div>
                    {projects.map((item) => (
                    <div
                        className={`h-screen w-screen flex items-center justify-center bg-gradient-to-b ${item.color}`}
                        key={item.id}>
                        <div className="flex flex-col gap-6 text-[#9cb9ec]">
                            <h1 className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-4xl">
                                {item.title}
                            </h1>
                            <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                <Image src={item.img} alt="project image" fill/>
                            </div>
                            <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                {item.desc}
                            </p>
                            <Link href={item.link} className="flex justify-end">
                                <button
                                    className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg ring-1 ring-black bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec] font-semibold m-4 rounded">
                                    View Project Results
                                </button>
                            </Link>
                        </div>
                    </div>
                    ))}
                    <div className="text-8xl text-center text-[#9cb9ec] text-opacity-90 h-screen w-screen flex items-center justify-center bg-gradient-to-b from-[#1f2b3b] to-[#121c33]">
                        Publications
                    </div>
                    {publications.map((item) => (
                    <div
                        className={`h-screen w-screen flex items-center justify-center bg-gradient-to-b ${item.color}`}
                        key={item.id}>
                        <div className="flex flex-col gap-6 text-[#9cb9ec]">
                            <h1 className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-4xl">
                                {item.title}
                            </h1>
                            <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                <Image src={item.img} alt="project image" fill/>
                            </div>
                            <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                {item.desc}
                            </p>
                            <Link href={item.link} className="flex">
                                <button
                                    className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg ring-1 ring-black bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec] font-semibold m-4 rounded">
                                    View Publication Results
                                </button>
                            </Link>
                        </div>
                    </div>
                    ))}
                </motion.div>
            </div>
        </div>
        
        {/* Contact Section */}
        <div
            className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center text-[#9cb9ec] text-opacity-90 bg-gradient-to-b from-[#121c33] to-[#1f2b3b] overflow-hidden">
            <h1 className="text-8xl">Any questions?</h1>
            <div className="relative">
                <motion.svg
                    animate={{rotate: 360}}
                    transition={{duration: 8, ease: "linear", repeat: Infinity}}
                    viewBox="0 0 300 300"
                    className="w-64 h-64 md:w-[500px] md:h-[500px]"
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                        />
                    </defs>
                    <text fill="#9cb9ec">
                    <textPath xlinkHref="#circlePath"
                                  className="text-xl">
                            I will answer promptly!
                        </textPath>
                    </text>
                </motion.svg>
                <Link
                    href="/contact"
                    className="w-16 h-16 md:w-28 md:h-28 absolute ring-1 ring-black top-0 left-0 right-0 bottom-0 m-auto bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec] rounded-full flex items-center justify-center"
                >
                Lets Talk!
                </Link>
            </div>
        </div>
    </motion.div>
  )
}

export default ProjectsPage