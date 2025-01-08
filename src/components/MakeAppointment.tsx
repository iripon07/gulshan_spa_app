import Link from "next/link";

const MakeAppointment = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-[url('/assets/AppointmentBG.webp')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div
          style={{
            backgroundImage:
              "linear-gradient(100deg, #051922 0%, #00000000 100%)",
          }}
          className="grid 2xl:h-[55vh] h-[40vh] md:h-[30vh] xl:h-[50vh] w-full xl:grid-cols-2 grid-cols-1 bg-transparent"
        >
          <div className="flex items-center 2xl:px-12  xl:px-10 lg:px-8 md:px-6 px-4">
            <div className="">
              <h5 className="lg:mb-6 md:mb-4 mb-2 text-xl font-bold text-white">
                Limited Time Offer
              </h5>
              <h3 className="md:mb-4 mb-2 text-[42px] font-handwriting text-primary">
                Special Edition
              </h3>
              <p className="lg:mb-6 md:mb-4 mb-2 text-sm font-normal text-white">
                Relax and rejuvenate with our exclusive spa offer—luxury
                treatments, soothing ambiance, and skilled therapists at
                discounted rates.
              </p>
              <h5 className="2xl:mb-10 xl:mb-8 lg:mb-6 md:mb-4 mb-3 text-xl font-bold text-white">
                Booking slot At 20% Discount, Use Code
                <span className="text-primary"> OFF20</span>
              </h5>
              <Link
                href="/shop"
                className="bg-white px-6 py-3 text-lg font-semibold ease-in text-primary duration-400 hover:opacity-80"
              >
                Booking Now
              </Link>
            </div>
          </div>
          <div className="xl:block hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
