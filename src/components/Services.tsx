"use client";

import Image from "next/image";
import herbal from "@/assets/herbal.png";
import "animate.css";

const Services = () => {
  return (
    <div id="services" className="bg-pink-50">
      <div className="container mx-auto py-6">
        <div className="mx-auto w-full px-6 text-center md:w-[50%] xl:w-[35%]">
          <p className="animate__animated animate__fadeInLeftBig mb-2 font-poppins text-3xl font-semibold text-primary md:text-4xl xl:text-6xl">
            Our Services
          </p>
          <p className="animate__animated animate__fadeInRightBig font-prosto text-sm font-medium text-secondary md:text-base">
            Whether it is simple threading, haircuts or a complete body massage,
            we serve you with all your beauty needs with best products coupled
            with dedicated services or board.
          </p>
        </div>

        <div className="flex flex-col pt-10 lg:flex-row">
          <div className="animate__animated animate__fadeInLeft w-full lg:w-1/2">
            <Image className="w-full" src={herbal} alt="Herbal for spa" />
          </div>

          <div className="flex w-full flex-col md:flex-row lg:w-1/2">
            <div className="animate__animated animate__fadeInRight w-full lg:w-1/2">
              <div className="bg-gray-100 p-6">
                <p className="mb-2 font-poppins text-xl font-semibold uppercase text-gray-600">
                  1. Dry massage: 3500
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <p className="font-poppins text-xl font-semibold uppercase text-gray-600">
                  2. oil massage: 4500
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-100 p-6">
                <p className="font-poppins text-xl font-semibold uppercase text-gray-600">
                  3. aroma thai: 5500
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-50 p-6">
                <p className="font-poppins text-xl font-semibold uppercase text-gray-600">
                  4. hot oil spa: 5500
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-100 p-6">
                <p className="font-poppins text-xl font-semibold uppercase text-gray-600">
                  5. nuru massage: 6000
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-50 p-6">
                <p className="font-poppins text-xl font-semibold uppercase text-gray-600">
                  6. b to b massage: 7500
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>{" "}
            </div>

            <div className="animate__animated animate__fadeInBottomRight w-full lg:w-1/2">
              <div className="bg-gray-100 p-6">
                <p className="mb-2 font-poppins text-xl font-semibold uppercase text-gray-600">
                  7. float therapy: 4000
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <p className="font-poppins text-xl font-semibold uppercase text-gray-600">
                  8. deep message: 8000
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-100 p-6">
                <p className="font-poppins text-xl font-semibold uppercase text-gray-600">
                  9. happy ending service: 5500
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-50 p-6">
                <p className="font-poppins text-xl font-semibold uppercase text-gray-600">
                  10. lomi lomi massage: 12000
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-100 p-6">
                <p className="font-poppins text-xl font-semibold uppercase text-gray-600">
                  11. four hand massage: 15000
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-50 p-6">
                <p className="font-poppins text-xl font-semibold uppercase text-gray-600">
                  12. six hand massage: 21000
                </p>
                <p className="font-prosto text-sm text-slate-400">
                  Message time (60 minutes)
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
