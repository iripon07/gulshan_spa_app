"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-primary bg-white">
      <div className="hidden px-6 md:block">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div>
            <Link href="#home">
              <Image
                src={logo}
                alt="Logo of site"
                quality={100}
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="hidden items-center gap-x-8 text-xl md:flex">
            <Link href="#home" className="text-primary hover:text-gray-400">
              Home
            </Link>
            <Link href="#features" className="text-primary hover:text-gray-400">
              Features
            </Link>
            <Link href="#services" className="text-primary hover:text-gray-400">
              Services
            </Link>
            <Link href="#about" className="text-primary hover:text-gray-400">
              About
            </Link>
            <Link href="#contact" className="text-primary hover:text-gray-400">
              Contact
            </Link>
            <Link
              href="/booking"
              className="border border-primary bg-white px-4 py-2 font-poppins font-semibold text-primary duration-300 hover:bg-primary hover:text-white"
            >
              Booking Now
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer text-2xl text-primary"
            >
              {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto block md:hidden">
        <div className="flex h-[68px] items-center justify-between">
          <div className="flex h-full w-full items-center justify-between px-6 text-4xl font-extrabold text-primary">
            <Link href="#home">
              <Image
                src={logo}
                className="h-[33px] w-[62px]"
                alt="Logo for mobile"
              ></Image>
            </Link>

            <div className="flex items-center justify-center gap-6">
              <Link
                href="/booking"
                className="border border-primary bg-white px-2 py-1 font-poppins text-xl font-semibold text-primary duration-300 hover:bg-primary hover:text-white md:px-4 md:py-2"
              >
                Booking Now
              </Link>

              <div onClick={() => setOpen(!open)}>
                {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
              </div>
            </div>
          </div>

          <div
            className={`absolute z-50 flex w-full flex-col bg-primary text-xl font-semibold text-white duration-300 ${open ? "top-[68px]" : "-top-[150px]"} `}
          >
            <Link
              className="border-b-[1px] border-white py-2 text-center"
              href="#home"
            >
              Home
            </Link>
            <Link
              className="border-b-[1px] border-white py-2 text-center"
              href="#features"
            >
              Features
            </Link>{" "}
            <Link
              className="border-b-[1px] border-white py-2 text-center"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="border-b-[1px] border-white py-2 text-center"
              href="#about"
            >
              About
            </Link>
            <Link
              className="border-b-[1px] border-white py-2 text-center"
              href="#contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
