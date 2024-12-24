import Cover from "@/assets/appointmentCover.jpg";
import Image from "next/image";

const MakeAppointment = () => {
  return (
    <div className="">
      <div className="relative">
        <Image src={Cover} alt="Cover" quality={100} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-primary text-5xl font-handwriting font-medium">
            Our Special Offer
          </p>
          <p className="text-white text-6xl text-center my-4 font-poppins">
            You Owe Yourself This Moment
          </p>
          <button className="bg-primary px-[56px] py-[17px]  text-white text-sm hover:opacity-80 duration-300 ">
            Make An appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
