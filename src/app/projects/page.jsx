"use client"
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
      id: 1,
      color: "from-[#1f2b3b] to-[#121c33]",
      title: "React Commerce",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 2,
      color: "from-[#1f2b3b] to-[#121c33]",
      title: "Next.js Medium Blog",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 3,
      color: "from-[#1f2b3b] to-[#121c33]",
      title: "Vanilla Book App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-[#1f2b3b] to-[#121c33]",
      title: "Spotify Music App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
  ];

const ProjectsPage = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
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
                    Project Involvement
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
            <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                <motion.div style={{x}} className="flex">
                    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-[#1f2b3b] to-[#121c33]"/>
                    {items.map((item) => (
                    <div
                        className={`h-screen w-screen flex items-center justify-center bg-gradient-to-b ${item.color}`}
                        key={item.id}>
                        <div className="flex flex-col gap-8 text-[#9cb9ec]">
                            <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                                {item.title}
                            </h1>
                            <div
                                className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                <Image src={item.img} alt="project image" fill/>
                            </div>
                            <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                {item.desc}
                            </p>
                            <Link href={item.link} className="flex justify-end">
                                <button
                                    className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg ring-1 ring-black bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec] font-semibold m-4 rounded">See
                                    Demo
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
            className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center text-[#9cb9ec] text-opacity-90 bg-gradient-to-b from-[#121c33] to-[#1f2b3b]">
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
                            Lets make something cool together!
                        </textPath>
                    </text>
                </motion.svg>
                <Link
                    href="/contact"
                    className="w-16 h-16 md:w-28 md:h-28 absolute ring-1 ring-black top-0 left-0 right-0 bottom-0 m-auto bg-[#293444] text-[#9cb9ec] text-opacity-90 hover:bg-[#293444] hover:bg-opacity-60 hover:text-[#9cb9ec] rounded-full flex items-center justify-center"
                >
                Let's talk!
                </Link>
            </div>
        </div>
    </motion.div>
  )
}

export default ProjectsPage