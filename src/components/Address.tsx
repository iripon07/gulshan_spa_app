"use client"

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
          +88 01935032782
        </p>
      </div>
      <div className="mt-5">
        <div>
          <div className="relative h-[400px] w-full text-right">
            <div className="h-full w-full overflow-hidden bg-none">
              <iframe
                className="h-full w-full border-0"
                src="https://maps.google.com/maps?width=563&amp;height=400&amp;hl=en&amp;q=sylhet engineering college&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
