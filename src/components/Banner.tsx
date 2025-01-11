"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";

const Banner = () => {

   const handleWhatsAppClick = () => {
     const phoneNumber = "01308494176";
     const message =
       "Step into tranquility. Welcome to Beauty Point Spa Center – the perfect escape for mind, body, and soul.";
     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

     window.open(whatsappUrl, "_blank");
   };

  return (
    <div className="w-full" id="home">
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <div
              className="h-[400px] bg-[url('/assets/1.jpg')] md:h-[500px] lg:h-[600px]"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                position: "relative",
              }}
            >
              <div className="container mx-auto flex h-full items-center">
                <div className="w-[80%] px-6 md:w-[65%] lg:w-1/2">
                  <p className="mb-1 font-poppins text-sm text-white md:mb-3 md:text-lg">
                    Transforming Stress Into Serenity
                  </p>
                  <p className="font-prosto text-3xl text-white md:text-4xl xl:text-5xl">
                    Wellness Meets Elegance, Redefining Relaxation
                  </p>
                  <p className="my-3 font-poppins text-sm text-white md:my-4 md:text-base lg:my-6">
                    We are dedicated to rejuvenating your mind and body through
                    exceptional spa experiences.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-primary px-5 py-2 font-bold text-white duration-300 hover:bg-white hover:text-primary"
                  >
                    Booking Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div
              className="h-[400px] bg-[url('/assets/2.jpg')] md:h-[500px] lg:h-[600px]"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                position: "relative",
              }}
            >
              <div className="container mx-auto flex h-full items-center">
                <div className="w-[80%] px-6 md:w-[65%] lg:w-1/2">
                  <p className="mb-1 font-poppins text-sm text-white md:mb-3 md:text-lg">
                    The Art of Relaxation and Rejuvenation
                  </p>
                  <p className="font-prosto text-3xl text-white md:text-4xl xl:text-5xl">
                    Innovative Spa Experiences, Timeless Relaxation
                  </p>
                  <p className="my-3 font-poppins text-sm text-white md:my-4 md:text-base lg:my-6">
                    Passionate about crafting moments of pure relaxation and
                    well-being just for you.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-primary px-5 py-2 font-bold text-white duration-300 hover:bg-white hover:text-primary"
                  >
                    Booking Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div
              className="h-[400px] bg-[url('/assets/3.jpg')] md:h-[500px] lg:h-[600px]"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                position: "relative",
              }}
            >
              <div className="container mx-auto flex h-full items-center">
                <div className="w-[80%] px-6 md:w-[65%] lg:w-1/2">
                  <p className="mb-1 font-poppins text-sm text-white md:mb-3 md:text-lg">
                    Wellness Awaits: Indulge in Pure Comfort
                  </p>
                  <p className="font-prosto text-3xl text-white md:text-4xl xl:text-5xl">
                    Where Tranquility and Innovation Unite
                  </p>
                  <p className="my-3 font-poppins text-sm text-white md:my-4 md:text-base lg:my-6">
                    We believe in restoring your inner calm through personalized
                    care and attention.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-primary px-5 py-2 font-bold text-white duration-300 hover:bg-white hover:text-primary"
                  >
                    Booking Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
