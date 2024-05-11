import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

// dictionary of tech icon names and src for the images locally stored in the public/images/techIcons folder
const techIcons = {
    "C#": "/images/techIcons/c-sharp.png",
    "Unity": "/images/techIcons/unity.png",
    "Postman": "/images/techIcons/postman.png",
    "PostgreSQL": "/images/techIcons/postgresql.png",
    "C++": "/images/techIcons/c++.png",
    "Java": "/images/techIcons/java.png",
    "MATLAB": "/images/techIcons/matlab.png",
    "Python": "/images/techIcons/python.png",
    "Jenkins": "/images/techIcons/jenkins.png",
    "Docker": "/images/techIcons/docker.png",
    "Git": "/images/techIcons/git.png",
    "GitHub Actions": "/images/techIcons/Github Actions.png",
    "Jira": "/images/techIcons/jira.png",
    "FramerMotion": "/images/techIcons/framer-motion.png",
    "CI/CD": "/images/techIcons/cicd.png",
    "Selenium": "/images/techIcons/selenium.png",
    "Appium": "/images/techIcons/appium.png",  
    "Cucumber": "/images/techIcons/cucumber.png",
    "Cypress": "/images/techIcons/cypress.png",
    "Playwright": "/images/techIcons/playwright.png",
}

function ExperienceCard({ project }) {
    return (
        <article
            className={"flex flex-col rounded-3xl items-center space-x-7 space-y-3 flex-shrink-0 snap-start w-[500px] md:w-[800px] xl:w-[1200px] p-10 bg-[#1f2b3b] bg-opacity-60 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"}>
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
            <div className="px-0 md:px-10">
                <h4 className="text-[#9cb9ec] text-opacity-90 font-semibold text-2xl">
                    {project.title}
                </h4>
                <div className="flex space-x-2 my-2 justify-center">
                    {project.techImg.map((tech) => (
                        <Image alt="" key={techIcons[tech]} className={"rounded-full"} src={techIcons[tech]} height={40} width={40}/>
                    ))}
                </div>
            </div>
            <p className={"text-[#9cb9ec] text-opacity-90 text-lg"}>{project.desc}</p>
        </article>
    );
}

export default ExperienceCard;