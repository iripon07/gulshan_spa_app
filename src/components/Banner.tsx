"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";

const Banner = () => {
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
              className="h-[400px] bg-[url('/assets/Banner1.jpg')] md:h-[500px] lg:h-[600px]"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",

                position: "relative",
              }}
            >
              <div className="container mx-auto flex h-full items-center border-2 border-red-500">
                <div className="w-[80%] px-6 md:w-[65%] lg:w-1/2">
                  <p className="mb-1 font-poppins text-sm text-white md:mb-3 md:text-lg">
                    Finance and consulting company
                  </p>
                  <p className="font-prosto text-3xl text-white md:text-4xl xl:text-5xl">
                    Creative and vision with digital experience!
                  </p>
                  <p className="my-3 font-poppins text-sm text-white md:my-4 md:text-base lg:my-6">
                    We are passionate about solving problems through creative
                    communications.{" "}
                  </p>
                  <button className="bg-primary px-5 py-2 font-bold text-white duration-300 hover:bg-white hover:text-primary">
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
              className="h-[400px] bg-[url('/assets/Banner1.jpg')] md:h-[500px] lg:h-[600px]"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",

                position: "relative",
              }}
            >
              <div className="container mx-auto flex h-full items-center border-2 border-red-500">
                <div className="w-[80%] px-6 md:w-[65%] lg:w-1/2">
                  <p className="mb-1 font-poppins text-sm text-white md:mb-3 md:text-lg">
                    Finance and consulting company
                  </p>
                  <p className="font-prosto text-3xl text-white md:text-4xl xl:text-5xl">
                    Creative and vision with digital experience!
                  </p>
                  <p className="my-3 font-poppins text-sm text-white md:my-4 md:text-base lg:my-6">
                    We are passionate about solving problems through creative
                    communications.{" "}
                  </p>
                  <button className="bg-primary px-5 py-2 font-bold text-white duration-300 hover:bg-white hover:text-primary">
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
              className="h-[400px] bg-[url('/assets/Banner1.jpg')] md:h-[500px] lg:h-[600px]"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",

                position: "relative",
              }}
            >
              <div className="container mx-auto flex h-full items-center border-2 border-red-500">
                <div className="w-[80%] px-6 md:w-[65%] lg:w-1/2">
                  <p className="mb-1 font-poppins text-sm text-white md:mb-3 md:text-lg">
                    Finance and consulting company
                  </p>
                  <p className="font-prosto text-3xl text-white md:text-4xl xl:text-5xl">
                    Creative and vision with digital experience!
                  </p>
                  <p className="my-3 font-poppins text-sm text-white md:my-4 md:text-base lg:my-6">
                    We are passionate about solving problems through creative
                    communications.{" "}
                  </p>
                  <button className="bg-primary px-5 py-2 font-bold text-white duration-300 hover:bg-white hover:text-primary">
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
