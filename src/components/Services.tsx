import Image from "next/image";
import herbal from "@/assets/herbal.png";

const Services = () => {
  return (
    <div className="bg-pink-50">
      <div className="container mx-auto py-6">
        <div className=" text-center w-full md:w-[50%] xl:w-[35%] mx-auto px-6">
          <p className="xl:text-6xl md:text-4xl text-3xl text-primary font-poppins font-semibold mb-2">
            Our Services
          </p>
          <p className="md:text-base text-sm text-secondary font-prosto font-medium">
            Whether it is simple threading, haircuts or a complete body massage,
            we serve you with all your beauty needs with best products coupled
            with dedicated services or board.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 w-full">
            <Image className="w-full" src={herbal} alt="Herbal for spa" />
          </div>

          <div className="lg:w-1/2 w-full flex flex-col md:flex-row">
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-100 p-4">
                <p className="text-gray-600 font-semibold font-poppins text-xl mb-2 uppercase">
                  1. Dry massage: 3500
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl uppercase ">
                  2. oil massage: 4500
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-100 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl uppercase">
                  3. aroma thai: 5500
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-50 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl uppercase">
                  4. hot oil spa: 5500
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-100 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl uppercase">
                  5. nuru massage: 6000
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-50 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl uppercase ">
                  6. b to b massage: 7500
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>{" "}
            </div>

            <div className="lg:w-1/2 w-full ">
              <div className="bg-gray-100 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl mb-2 uppercase">
                  7. float therapy: 4000
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl uppercase ">
                  8. deep message: 8000
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-100 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl uppercase">
                  9. happy ending service: 5500
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-50 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl uppercase">
                  10. lomi lomi massage: 12000
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-100 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl uppercase">
                  11. four hand massage: 15000
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
                  Message time (60 minutes)
                </p>
              </div>{" "}
              <div className="bg-gray-50 p-6">
                <p className="text-gray-600 font-semibold font-poppins text-xl uppercase ">
                  12. six hand massage: 21000
                </p>
                <p className="text-slate-400 text-sm font-prosto ">
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
