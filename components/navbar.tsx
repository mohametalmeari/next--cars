"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./botton";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const links = [{ href: "/", label: "Home" }];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <nav className="h-16 flex justify-between items-center px-3 absolute right-0 left-0 top-0">
      <Link href="/">
        <Image src="/logo.svg" alt="RoadStar Motors" width={75} height={29} />
      </Link>

      <Button variant="ghost" onClick={toggle} className="sm:hidden">
        <HiMenuAlt3 className="text-2xl" />
      </Button>

      <ul
        className={`fixed bg-[#1E3A8A] inset-0 transition-all-500 text-white flex flex-col 
                    items-center py-20 ${!open ? "translate-x-full" : ""}   
                    sm:static sm:flex-row sm:translate-x-0 sm:bg-transparent sm:text-[#2D2D2D]
                    sm:py-0 
                    `}
      >
        {links.map(({ href, label }) => (
          <li key={`${href}`}>
            <Link
              href={href}
              onClick={toggle}
              className="hover:bg-white/10 sm:hover:bg-black/5 transition-all-500 rounded-lg px-2 pb-1"
            >
              {label}
            </Link>
          </li>
        ))}

        <Button
          variant="ghost"
          onClick={toggle}
          className="absolute top-0 right-0 m-5 hover:bg-white/10 sm:hidden"
        >
          <MdOutlineClose className="text-2xl" />
        </Button>
      </ul>
    </nav>
  );
};