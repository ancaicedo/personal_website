"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import NavLink from "./navLink"

const links = [
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/portfolio", title: "Portfolio"},
  {url: "/contact", title: "Contact"},
];


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="h-full flex items-center justify-between" style={{padding: '0 5vw'}}>
      {/* Navbar */}
      <div className="hidden md:flex gap-6 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title}/>
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex justify-center w-1/3">
        <Link href="/" className="text-sm bg-[#334155] rounded-md  p-1 font-semibold flex items-center justify-center">  
          <span className="text-[#7D9DD3] text-opacity-80  mr-1">Home</span>
          <span className="w-12 h-8 rounded bg-[#7D9DD3] text-[#0f172a] flex items-center justify-center">Page</span>
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
          <div className="w-10 h-1 bg-[#7D9DD3]"></div>
          <div className="w-10 h-1 bg-[#7D9DD3]"></div>
          <div className="w-10 h-1 bg-[#7D9DD3]"></div>
        </button>
        {/* Menu List */}
        { open && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-[#334155] text-[#7D9DD3] text-4xl flex flex-col items-center justify-center gap-10">
          {links.map((link) => (
            <Link href={link.url} key={link.title} className="text-[#7D9DD3] text-opacity-50 hover:text-[#7D9DD3] hover:text-opacity-100">
              {link.title}
              </Link>
          ))}
        </div>
)}
      </div>
    </div>
  )
}

export default Navbar