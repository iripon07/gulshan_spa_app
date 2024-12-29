import Image from "next/image";
import avatar1 from "@/assets/avatar2.webp";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="container mx-auto my-10">

      <div className="text-center py-6 lg:w-1/3 w-full mx-auto">
        <p className="text-primary text-base font-poppins py-2">Testimonials</p>
        <p className="text-xl text-secondary font-prosto ">
          Clients testimonials
        </p>
        <p className="text-base font-poppins text-black">
          Our approach thrives at the intersection between data-driven market
          research and traditional management consultancies.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div
          className="text-center p-4 rounded-md"
          style={{
            boxShadow:
              "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.10)",
          }}
        >
          <Image
            src={avatar1}
            alt=""
            className="w-[100px] h-[100px] rounded-full mx-auto"
          />
          <p className="text-black text-xl font-poppins mt-4">
            Alfredo Stefano
          </p>
          <p className="uppercase text-base font-prosto text-primary my-2 ">
            DESigner
          </p>
          <div className="flex justify-center items-center text-blue-600 gap-x-3 mb-5">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
          </div>
          <p className="text-sm font-poppins text-gray-500">
            Relaxing ambiance, skilled therapists, and rejuvenating treatments
            made my spa experience truly exceptional. Highly recommended for
            ultimate relaxation!
          </p>

          <div className="flex justify-center items-center gap-x-2 text-sm text-[#FF9529] mt-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>

        <div
          className="text-center p-4 rounded-md"
          style={{
            boxShadow:
              "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.10)",
          }}
        >
          <Image
            src={avatar1}
            alt=""
            className="w-[100px] h-[100px] rounded-full mx-auto"
          />
          <p className="text-black text-xl font-poppins mt-4">
            Alfredo Stefano
          </p>
          <p className="uppercase text-base font-prosto text-primary my-2 ">
            DESigner
          </p>
          <div className="flex justify-center items-center text-blue-600 gap-x-3 mb-5">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
          </div>
          <p className="text-sm font-poppins text-gray-500">
            Relaxing ambiance, skilled therapists, and rejuvenating treatments
            made my spa experience truly exceptional. Highly recommended for
            ultimate relaxation!
          </p>

          <div className="flex justify-center items-center gap-x-2 text-sm text-[#FF9529] mt-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div
          className="text-center p-4 rounded-md"
          style={{
            boxShadow:
              "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.10)",
          }}
        >
          <Image
            src={avatar1}
            alt=""
            className="w-[100px] h-[100px] rounded-full mx-auto"
          />
          <p className="text-black text-xl font-poppins mt-4">
            Alfredo Stefano
          </p>
          <p className="uppercase text-base font-prosto text-primary my-2 ">
            DESigner
          </p>
          <div className="flex justify-center items-center text-blue-600 gap-x-3 mb-5">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
          </div>
          <p className="text-sm font-poppins text-gray-500">
            Relaxing ambiance, skilled therapists, and rejuvenating treatments
            made my spa experience truly exceptional. Highly recommended for
            ultimate relaxation!
          </p>

          <div className="flex justify-center items-center gap-x-2 text-sm text-[#FF9529] mt-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
