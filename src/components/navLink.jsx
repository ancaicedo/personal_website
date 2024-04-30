"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLink = ({link}) => {
    const pathName = usePathname();
    return (
        <Link className={`text-[#9cb9ec] text-opacity-60 hover:text-[#9cb9ec] hover:text-opacity-100 rounded p-1 ${pathName === link.url && "bg-[#242d3a] text-[#9cb9ec] font-Ubuntu"}`} href={link.url}>
            {link.title}
        </Link>
    );
};

export default navLink