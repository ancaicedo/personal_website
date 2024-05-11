"use client"
import {motion} from "framer-motion";

import ExperienceCard from "@/components/experienceCard";

const projects = [
    {
        id: 1, 
        color: "from-[#1f2b3b] to-[#121c33]",
        title: "Queso Automation Framework",
        desc: `Queso is an automation framework we developed internally for Unity Applications. 
                I collaborated on the development of Queso as a Full Stack application in C# and using MySQL and PosgreSQL for backend. 
                This framework set a new standard for our Quality Engineering team and 
                has become a key automation tool for all Unity projects. I successfully 
                implemented this framework in multiple projects across various platforms.`,
        img: "/images/automation.jpg", 
        techImg: ["Unity", "C#", "Java", "PostgreSQL", "Postman", "Confluence"],
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
        techImg: ["C#", "Unity", "Postman", "PostgreSQL"],
        link: "https://blog.unity.com/industry/how-digital-twins-are-transforming-large-scale-airports",
    },
    {
        id: 3,
        color: "from-[#1f2b3b] to-[#121c33]",
        title: "VRChat Android Port",
        desc: `I was in team that collaborated with the VRChat developers to port the application to mobile platforms. 
                My role focused on testing and automation, contributing to the successful adaptation of the application for mobile use. 
                I played a key role in ensuring its functionality and performance on mobile devices were up to standard.`,
        img: "/images/vrchat.png",
        techImg: ["C#", "Unity", "Postman", "PostgreSQL"],
        link: "https://hello.vrchat.com/blog/mobile-alpha-now-live",
    },
    {
        id: 4,
        color: "from-[#1f2b3b] to-[#121c33]",
        title: "AppleTV Prehistoric Planet Immersive",
        desc: `A confidential film production project for Apple TV+ show "Prehistoric Planet," 
                aimed at creating a VR experience for the unreleased Apple Vision Pro. As an automation engineer, I developed 
                tools in Python to track the progress of the render farm and analyze faults in the build pipeline. These tools 
                included a log parser and statistic extractor for each node, as well as graphing tools for monitoring memory usage, 
                frames rendered, VRAM usage, and more. This project was a unique and exciting opportunity to blend technology and storytelling.`,
        img: "/images/apple.jpg",
        techImg: ["C#", "Unity", "Postman", "PostgreSQL"],
        link: "https://www.apple.com/tv-pr/news/2024/01/apple-tv-unveils-groundbreaking-immersive-originals-from-todays-biggest-storytellers-set-to-debut-on-apple-vision-pro/",
    },
    {
        id: 5,
        color: "from-[#1f2b3b] to-[#121c33]",
        title: "Maloka VR",
        desc: `Maloka is a VR application that transports the user into an immersive world for exploration, reflection, healing, and play, where I focused on testing and automation. 
                Unlike previous projects, I was also involved in the CI/CD pipeline, ensuring smooth deployment and integration processes. 
                For automated testing, I used GameDriver and Cypress, contributing to the application's quality and efficiency.`,
        img: "/images/maloka.jpg",
        techImg: ["C#", "Unity", "Postman", "PostgreSQL"],
        link: "https://www.playmaloka.com/about",
    },
    {
        id: 6,
        color: "from-[#1f2b3b] to-[#121c33]",
        title: "Adaptive Bandwidth Throttling for Telus",
        desc: `As the technical lead for the Adaptive Bandwidth Throttling project with TELUS Communications. 
            My role involved overseeing project infrastructure, developing design patterns, and implementing new features. 
            Our collaboration resulted in a successful solution that significantly improved user experience and garnered 
            recognition from TELUS executives and coverage in a University of Calgary publication.`,
        img: "/images/Telus.png",
        techImg: ["C#", "Unity", "Postman", "PostgreSQL"],
        link: "https://schulich.ucalgary.ca/news/schulich-capstone-team-impresses-industry-partner-mobile-network-solution",
    },
    {
        id: 7,
        color: "from-[#1f2b3b] to-[#121c33]",
        title: "Research on Force Depression in Muscle Fiber Types",
        desc: `Studying force depression in different muscle fibers. 
            We used rabbit muscles to measure force changes during active fiber shortening. 
            By analyzing the data and coding tools for extraction, we found that Type II fibers 
            have greater force depression than Type I fibers when shortening at a certain speed. 
            However, this difference disappears when they shorten at the same relative speed, suggesting 
            it's due to their unique force-velocity relationships rather than intrinsic differences.`,
        img: "/images/research.png",
        techImg: ["C#", "Unity", "Postman", "PostgreSQL"],
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0021929015003127",
    },
];

const ProjectsPage = () => {
    return (
        <motion.div
            initial={{y:"-200vh"}}
            animate={{y:"0%"}}
            transition={{duration:1}}
            className="flex relative h-auto flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <div className={"h-auto w-full flex space-x-10 overflow-x-scroll p-1 snap-x snap-mandatory projects-page scrollbar scrollbar-track-[#0f172a] scrollbar-w-3 scrollbar-thumb-[#9cb9ec] scrollbar-thumb-rounded-full scrollbar-track-rounded-full"}>
                {projects.map((project) => (   
                    <ExperienceCard project={project} key={project.id}/>
                ))}
            </div>
        </motion.div>
  )
}

export default ProjectsPage