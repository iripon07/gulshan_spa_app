"use client";

import Image from "next/image";
import avatar1 from "@/assets/avatar2.webp";
import avatar2 from "@/assets/johnyDepp.jpg";
import avatar3 from "@/assets/111.avif";
import avatar4 from "@/assets/121.jpg";


import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="mx-auto w-full py-6 text-center lg:w-1/3">
        <p className="py-2 font-poppins text-base text-primary">Testimonials</p>
        <p className="font-prosto text-xl text-secondary">
          Clients testimonials
        </p>
        <p className="font-poppins text-base text-black">
          Our approach thrives at the intersection between data-driven market
          research and traditional management consultancies.
        </p>
      </div>

      <Swiper
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1270: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="px-4 py-6">
          <div
            className="rounded-md p-4 text-center"
            style={{
              boxShadow:
                "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Image
              src={avatar4}
              alt=""
              className="mx-auto h-[100px] w-[100px] rounded-full"
            />
            <p className="mt-4 font-poppins text-xl text-black">John Don</p>
            <p className="my-2 font-prosto text-base uppercase text-primary">
              businessman
            </p>
            <div className="mb-5 flex items-center justify-center gap-x-3 text-blue-600">
              <FaFacebook />
              <FaXTwitter />
              <FaInstagram />
            </div>
            <p className="font-poppins text-sm text-gray-500">
              Relaxing ambiance, skilled therapists, and rejuvenating treatments
              made my spa experience truly exceptional. Highly recommended for
              ultimate relaxation!
            </p>

            <div className="mt-4 flex items-center justify-center gap-x-2 text-sm text-[#FF9529]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-4 py-6">
          <div
            className="rounded-md p-4 text-center"
            style={{
              boxShadow:
                "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Image
              src={avatar1}
              alt=""
              className="mx-auto h-[100px] w-[100px] rounded-full"
            />
            <p className="mt-4 font-poppins text-xl text-black">
              Alfredo Stefano
            </p>
            <p className="my-2 font-prosto text-base uppercase text-primary">
              DESigner
            </p>
            <div className="mb-5 flex items-center justify-center gap-x-3 text-blue-600">
              <FaFacebook />
              <FaXTwitter />
              <FaInstagram />
            </div>
            <p className="font-poppins text-sm text-gray-500">
              Relaxing ambiance, skilled therapists, and rejuvenating treatments
              made my spa experience truly exceptional. Highly recommended for
              ultimate relaxation!
            </p>

            <div className="mt-4 flex items-center justify-center gap-x-2 text-sm text-[#FF9529]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-4 py-6">
          <div
            className="rounded-md p-4 text-center"
            style={{
              boxShadow:
                "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Image
              src={avatar2}
              alt=""
              className="mx-auto h-[100px] w-[100px] rounded-full"
            />
            <p className="mt-4 font-poppins text-xl text-black">
              Alexander Dummer
            </p>
            <p className="my-2 font-prosto text-base uppercase text-primary">
              Film Director
            </p>
            <div className="mb-5 flex items-center justify-center gap-x-3 text-blue-600">
              <FaFacebook />
              <FaXTwitter />
              <FaInstagram />
            </div>
            <p className="font-poppins text-sm text-gray-500">
              Relaxing ambiance, skilled therapists, and rejuvenating treatments
              made my spa experience truly exceptional. Highly recommended for
              ultimate relaxation!
            </p>

            <div className="mt-4 flex items-center justify-center gap-x-2 text-sm text-[#FF9529]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-4 py-6">
          <div
            className="rounded-md p-4 text-center"
            style={{
              boxShadow:
                "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Image
              src={avatar1}
              alt=""
              className="mx-auto h-[100px] w-[100px] rounded-full"
            />
            <p className="mt-4 font-poppins text-xl text-black">
              Alfredo Numan
            </p>
            <p className="my-2 font-prosto text-base uppercase text-primary">
              Actor
            </p>
            <div className="mb-5 flex items-center justify-center gap-x-3 text-blue-600">
              <FaFacebook />
              <FaXTwitter />
              <FaInstagram />
            </div>
            <p className="font-poppins text-sm text-gray-500">
              The relaxing ambiance, skilled therapists, and rejuvenating
              treatments made my spa visit truly exceptional—highly recommended
              for complete relaxation!
            </p>

            <div className="mt-4 flex items-center justify-center gap-x-2 text-sm text-[#FF9529]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="px-4 py-6">
          <div
            className="rounded-md p-4 text-center"
            style={{
              boxShadow:
                "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Image
              src={avatar3}
              alt=""
              className="mx-auto h-[100px] w-[100px] rounded-full"
            />
            <p className="mt-4 font-poppins text-xl text-black">
              Alfredo Stefano
            </p>
            <p className="my-2 font-prosto text-base uppercase text-primary">
              DESigner
            </p>
            <div className="mb-5 flex items-center justify-center gap-x-3 text-blue-600">
              <FaFacebook />
              <FaXTwitter />
              <FaInstagram />
            </div>
            <p className="font-poppins text-sm text-gray-500">
              Relaxing ambiance, skilled therapists, and rejuvenating treatments
              made my spa experience truly exceptional. Highly recommended for
              ultimate relaxation!
            </p>

            <div className="mt-4 flex items-center justify-center gap-x-2 text-sm text-[#FF9529]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
