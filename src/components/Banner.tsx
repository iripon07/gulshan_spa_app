

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <div
          className="bg-[url('/assets/Banner1.jpg')]"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "600px",
            position: "relative",
          }}
        >
          <div className="container mx-auto flex items-center border-red-500 border-2 h-full">
            <div className="w-1/2">
              <p className="text-lg text-white font-poppins mb-3 animate-typing">
                Finance and consulting company
              </p>
              <p className="text-5xl text-white font-prosto ">
                Creative and vision with digital experience!
              </p>
              <p className="text-white text-base font-poppins my-6">
                We are passionate about solving problems through creative
                communications.{" "}
              </p>
              <button className="bg-primary text-white font-bold py-2 px-5 hover:bg-white hover:text-primary duration-300">
                Booking Now
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner