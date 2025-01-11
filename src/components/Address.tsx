"use client";

const Address = () => {
  return (
    <div id="contact" className="container mx-auto px-6 py-10">
      <div className="mx-auto w-full py-2 text-center md:w-[50%] lg:w-[35%]">
        <p className="font-poppins text-2xl font-semibold">
          Call for Booking and Appointment
        </p>
        <p className="my-3 text-sm text-secondary md:text-lg">
          Looking for beauty care or a quick quote? Call us now for a free
          consultation or book your appointment instantly!
        </p>
        <p className="font-prosto text-3xl font-semibold text-primary md:text-4xl xl:text-5xl">
          +88 01308494176
        </p>
      </div>
      <div className="mt-5">
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full items-center justify-center text-center md:w-1/2 lg:w-[40%]">
            <div>
              <p className="mb-4 text-center font-poppins text-xl font-medium text-black">
                Contact with Us
              </p>
              <p className="text-lg text-[#757575]">
                Gulshan-1, Road Number: #37,Dhaka-1212
              </p>
              <p className="my-2 text-lg font-medium text-black">
                {" "}
                Email: info@gulshanpointspacenter
              </p>
              <p className="font-poppins text-2xl font-semibold text-black">
                {" "}
                Telephone: 01308494176
              </p>
            </div>
          </div>
          <div className="relative h-[400px] w-full text-right">
            <div className="h-full w-full overflow-hidden bg-none">
              <iframe
                className="h-full w-full"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=101 Gulshan Ave, Dhaka 1212&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
