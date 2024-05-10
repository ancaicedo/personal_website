"use client"

import { AnimatePresence, } from "framer-motion"
import Navbar from "./navbar"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import {useEffect, useState} from "react";

const TransitionProvider = ({children}) => {
    const pathName = usePathname()
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
        setIsVisible(true);
    }
    , [pathName])
    
  return (
    <AnimatePresence mode="wait">
        <div key={pathName} className="h-screen w-screen bg-gradient-to-b from-[#121c33] to-[#1f2b3b]">
            <motion.div 
            className="h-screen w-screen fixed bg-[#121c33] rounded-b-[100px] z-40"
            animate={{height: "0vh"}}
            exit={{height: "140vh"}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            />

            {isVisible && (
                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-[#9cb9ec] text-8xl cursor-default z-50 w-fit h-fit"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    onAnimationComplete={() => setIsVisible(false)}
                >
                    {pathName === "/" ? "Home" : pathName.substring(1).charAt(0).toUpperCase() + pathName.substring(2)}
                </motion.div>
            )}
            <motion.div 
            className="h-screen w-screen fixed bg-[#121c33] rounded-t-[100px] bottom-0 z-30"
            initial={{height: "140vh"}}
            animate={{height: "0vh", transition:{delay: 0.3}}}
            />
          <div className="h-24">
            <Navbar/>
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
