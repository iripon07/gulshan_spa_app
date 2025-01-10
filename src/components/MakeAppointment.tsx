import Link from "next/link";

const MakeAppointment = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-[url('/assets/AppointmentBG.webp')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div
          style={{
            backgroundImage:
              "linear-gradient(100deg, #051922 0%, #00000000 100%)",
          }}
          className="grid h-[40vh] w-full grid-cols-1 bg-transparent md:h-[30vh] xl:h-[50vh] xl:grid-cols-2 2xl:h-[55vh]"
        >
          <div className="flex items-center px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="">
              <h5 className="mb-2 text-xl font-bold text-white md:mb-4 lg:mb-6">
                Limited Time Offer
              </h5>
              <h3 className="mb-2 font-handwriting text-[42px] text-primary md:mb-4">
                Special Edition
              </h3>
              <p className="mb-2 text-sm font-normal text-white md:mb-4 lg:mb-6">
                Relax and rejuvenate with our exclusive spa offer—luxury
                treatments, soothing ambiance, and skilled therapists at
                discounted rates.
              </p>
              <h5 className="mb-3 text-xl font-bold text-white md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10">
                Booking slot At 20% Discount, Use Code
                <span className="text-primary"> OFF20</span>
              </h5>
              <Link
                href="/shop"
                className="duration-400 bg-white px-6 py-3 text-lg font-semibold text-primary ease-in hover:opacity-80"
              >
                Booking Now
              </Link>
            </div>
          </div>
          <div className="hidden xl:block"></div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
