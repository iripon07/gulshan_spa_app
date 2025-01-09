"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open, setOpen);

  return (
    <div className="border-b-primary border-[1px]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image
            src={logo}
            alt="Logo of site"
            quality={100}
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="flex gap-x-8 text-xl justify-center items-center">
          <Link href="/" className="text-primary hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="text-primary hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="text-primary hover:text-gray-400">
            Services
          </Link>
          <Link href="/contact" className="text-primary hover:text-gray-400">
            Contact
          </Link>

          <Link
            className="text-primary border-[1px] border-primary bg-white font-poppins font-semibold duration-300 py-2 px-4 hover:bg-primary hover:text-white"
            href=""
          >
            Booking Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
