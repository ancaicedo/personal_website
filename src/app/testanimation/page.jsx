"use client"
import { motion } from 'framer-motion'

const TestPage = () => {
    const variants = {
        hidden: { x:400, y:300, opacity: 0.5 },
        visible: { x:100, y:-300, rotation: 80},
      }
  return (
    <div className='flex items-center justify-center h-full'>
        <motion.div 
        className='w-96 h-96 bg-red-400 rounded' 
        intial={{x:-100}} 
        variants={variants}
        animate={"visible"}
        transition={{duration: 2}}
        ></motion.div>
    </div>
  )
}

export default TestPage