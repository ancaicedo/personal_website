"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import NavLink from "./navLink"
import { delay, motion } from "framer-motion"

const links = [
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/portfolio", title: "Portfolio"},
  {url: "/contact", title: "Contact"},
];


const Navbar = () => {
  const [open, setOpen] = useState(false)
  const topVariant = {
    closed: {
      rotate: 0, 
    },
    opened:{
      rotate: 45,
    }
  }
  const midVariant = {
    closed: {
      opacity: 1, 
    },
    opened:{
      opacity: 0,
    }
  }
  const botVariant = {
    closed: {
      rotate: 0, 
    },
    opened:{
      rotate: -45,
    }
  }
  const listVariants = {  
    opened: {
      x: 0,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.15,
      },
    },
    closed: {
      x: "50vw",
    }
  }
  const itemVariants = {
    opened: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: "-10",
      opacity: 0,
    }
  }

  return (
    <div className="h-full flex items-center justify-between" style={{padding: '0 5vw'}}>

      {/* Navbar */}
      <div className="hidden md:flex gap-6 w-1/3 text-xl">
        {links.map((link) => (
          <NavLink link={link} key={link.title}/>
          ))}
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center font-Ubuntu">
        <Link href="/" className="text-sm bg-[#222f42] rounded-md  p-1 font-semibold flex items-center justify-center">  
          <span className="text-[#9cb9ec] text-opacity-80  mr-1">Hello</span>
          <span className="w-12 h-8 rounded bg-[#9cb9ec] text-[#0f172a] flex items-center justify-center">World!</span>
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="hidden md:flex gap-8 w-1/3">
      <Link href="https://www.linkedin.com/in/andres-caicedo/">
          <Image src="/images/linkedin.png" alt="linkedin account" width={30} height={30} />
        </Link>
        <Link href="https://github.com/ancaicedo">
          <Image src="/images/github-white.png" alt="GitHub account" width={30} height={30} />
        </Link>
        <Link href="https://wa.me/+18254885719">
          <Image src="/images/whatsapp.png" alt="whatsapp number" width={30} height={30} />
        </Link>
        <Link href="https://www.instagram.com/andres201caicedo/">
          <Image src="/images/instagram.png" alt="instagram account" width={30} height={30} />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick= {() => setOpen((prev) => !prev)}>
          {/* Hamburger */}
          <motion.div variants={topVariant} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-[#9cb9ec] origin-left"></motion.div>
          <motion.div variants={midVariant} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-[#9cb9ec]"></motion.div>
          <motion.div variants={botVariant} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-[#9cb9ec] origin-left"></motion.div>
        </button>

        {/* Menu List */}
        { open && (
        <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-[#0f172a] text-[#9cb9ec] text-4xl flex flex-col items-center justify-center gap-10 z-40">
          {links.map((link) => (
            <motion.div variants={itemVariants}  className="" key={link.title}>
              <Link href={link.url}  className="text-[#9cb9ec] text-opacity-60 hover:text-[#9cb9ec] hover:text-opacity-100">
              {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        )}
      </div>

    </div>
  )
}

export default Navbar