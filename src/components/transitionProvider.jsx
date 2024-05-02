"use client"

import { AnimatePresence, delay } from "framer-motion"
import Navbar from "./navbar"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const TransitionProvider = ({children}) => {
    const pathName = usePathname()
  return (
    <AnimatePresence>
        <div key={pathName} className="min-h-screen w-screen bg-gradient-to-b from-[#121c33] to-[#1f2b3b]">
            <motion.div className="h-screen w-screen fixed bg-[#121c33] rounded-b-[100px] z-40"
            animate={{height: "0vh"}}
            exit={{height: "100vh"}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            />
            <motion.div className="h-screen w-screen fixed bg-[#1f2b3b] rounded-b-[100px] bottom-0 z-40"
            initial={{height: "140vh"}}
            animate={{height: "0vh", transition:{delay: 0.5}}}
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