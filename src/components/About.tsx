"use client";

import aboutPhoto from "@/assets/About.jpg";
import "animate.css";
import Image from "next/image";
import { BsArrowThroughHeartFill } from "react-icons/bs";
import { FaArrowDownUpLock } from "react-icons/fa6";
import { GiSpiralArrow } from "react-icons/gi";

const About = () => {

   const handleWhatsAppClick = () => {
     const phoneNumber = "01308494176";
     const message =
       "Step into tranquility. Welcome to Beauty Point Spa Center – the perfect escape for mind, body, and soul.";
     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

     window.open(whatsappUrl, "_blank");
   };

  return (
    <div id="about" className="container mx-auto p-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="animate__animated animate__fadeInLeft md:w-full lg:w-1/2">
          <Image src={aboutPhoto} alt="ABout section"></Image>
        </div>
        <div className="animate__animated animate__rotateInDownRight md:w-full lg:w-1/2">
          <div className="mb-2 flex items-center justify-start text-primary">
            <p className="font-poppins text-xl font-semibold text-black">
              About Us
            </p>{" "}
            <GiSpiralArrow className="ml-4 text-2xl" />
          </div>
          <p className="my-3 font-handwriting text-5xl font-medium text-primary">
            Beauty Point Spa Center
          </p>
          <p className="font-poppins text-5xl font-semibold text-black">
            We Provide Skincare Secrets for Radiance Unveiled
          </p>
          <p className="my-3 font-poppins text-sm text-secondary md:text-base">
            At our beauty salon, a team of skilled beauty professionals awaits,
            passionate about their craft and always up-to-date with the latest
            trends through regular training. Whether you desire a timeless
            hairstyle or a refreshing facial, we’re here to enhance your beauty
            experience.
          </p>

          <div className="mb-3">
            <p className="font-prosto text-2xl text-primary">We Provide</p>
            <div className="ml-4 gap-2">
              <div className="flex items-center justify-start gap-3 font-poppins text-sm text-secondary md:text-base">
                <BsArrowThroughHeartFill className="text-primary" />{" "}
                <p>Natural Beauty Salon</p>
              </div>
              <div className="flex items-center justify-start gap-3 font-poppins text-sm text-secondary md:text-base">
                <BsArrowThroughHeartFill className="text-primary" />{" "}
                <p>Professional Women Spa Service</p>
              </div>
              <div className="flex items-center justify-start gap-3 font-poppins text-sm text-secondary md:text-base">
                <BsArrowThroughHeartFill className="text-primary" />{" "}
                <p>Experience Hair Treatments</p>
              </div>
            </div>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-between border-[1px] border-primary px-3 py-2 text-lg font-medium text-primary duration-300 hover:bg-primary hover:text-white"
          >
            More About Us <FaArrowDownUpLock className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
