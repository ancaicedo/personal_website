import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// dictionary of tech icon names and src for the images locally stored in the public/images/techIcons folder
const techIcons = {
    "C#": "/images/techIcons/c-sharp.png",
    "C++": "/images/techIcons/c++.png",
    "Confluence": "/images/techIcons/confluence.png",
    "Cucumber": "/images/techIcons/cucumber.png",
    "Cypress": "/images/techIcons/cypress.png",
    "Docker": "/images/techIcons/docker.png",
    "Flask": "/images/techIcons/flask.png",
    "Framer Motion": "/images/techIcons/framer-motion.png",
    "Git": "/images/techIcons/git.png",
    "GitHub Actions": "/images/techIcons/github-actions.png",
    "Java": "/images/techIcons/java.png",
    "Javascript": "/images/techIcons/javascript.png",
    "Jenkins": "/images/techIcons/jenkins.png",
    "Jira": "/images/techIcons/jira.png",
    "Junit 5": "/images/techIcons/junit.png",
    "Linear": "/images/techIcons/linear.png",
    "Linux": "/images/techIcons/linux.png",
    "MATLAB": "/images/techIcons/matlab.png",
    "Next.js": "/images/techIcons/nextjs.png",
    "Node.js": "/images/techIcons/nodejs.png",
    "Playwright": "/images/techIcons/playwright.png",
    "PostgreSQL": "/images/techIcons/postgresql.png",
    "Postman": "/images/techIcons/postman.png",
    "Python": "/images/techIcons/python.png",
    "React": "/images/techIcons/react.png",
    "Selenium": "/images/techIcons/selenium.png",
    "Typescript": "/images/techIcons/typescript.png",
    "Unity": "/images/techIcons/unity.png",
}

function Tooltip({ children, text }) {
    const [show, setShow] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="relative"
        >
            {children}
            {show && (
                <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 rounded bg-[#1f2b3b] text-[#9cb9ec] text-opacity-90 text-sm"
                >
                    {text}
                </div>
            )}
        </div>
    );
}
function ExperienceCard({ project }) {
    return (
        <article
            className={"flex flex-col rounded-3xl items-center space-x-1 space-y-3 flex-shrink-0 snap-center snap-always w-full sm:w-[500px] md:w-[800px] xl:w-[1200px] p-10 bg-[#1f2b3b] bg-opacity-60 opacity-90 hover:opacity-100 active:opacity-100 focus:opacity-100 cursor-pointer transition-opacity duration-200"}>
            <motion.img
                initial={{
                    y: -100,
                    opacity:0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{opacity:1, y:0}}
                viewport={{once: true}}
                className="w-[300px] h-[150px] rounded-lg md:w-[400px] md:h-[200px] xl:w-[700px] xl:h-[350px] object-cover object-center"
                src={project.img} alt=""
            />
            <div className="px-0 md:px-10 flex flex-col justify-between flex-grow">
                <h4 className="text-[#9cb9ec] text-opacity-90 font-semibold text-2xl">
                    {project.title}
                </h4>
                <div className="flex space-x-3 my-2 justify-center">
                    {project.techImg.map((tech) => (
                        <Tooltip text={tech} key={techIcons[tech]}>
                            <Image alt="" className={"rounded-full"} src={techIcons[tech]} height={40} width={40}/>
                        </Tooltip>
                    ))}
                </div>
            </div>
            <p className={"text-[#9cb9ec] text-opacity-90 text-lg"}>{project.desc}</p>
            <Link className="rel=noopener noreferrer" target="_blank" href={project.link}>
                <button
                    className="p-4 rounded bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec] text-lg font-semibold w-fit ring-1 ring-black">
                    See Results
                </button>
            </Link>
        </article>
    );
}

export default ExperienceCard;