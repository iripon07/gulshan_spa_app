import DryMassage from "@/assets/DryMassage.png";
import Image from "next/image";

const Features = () => {
  return (
    <div>
      <div className="container mx-auto px-6">
        <div className="py-3">
          <p className="text-lg font-prosto font-medium text-primary ">
            Amazing Features
          </p>
          <p className="text-secondary xl:text-6xl md:text-4xl text-2xl font-semibold font-poppins">
            Our Spa can offer you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6  py-10">
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image src={DryMassage} alt="Dry Massage" className="w-full" />
            <div className="p-6">
              <p className="text-primary text-2xl font-poppins font-semibold my-4">
                Dry Massage
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                Dry massage therapy offers deep relaxation, helping to alleviate
                stress, reduce anxiety, and combat symptoms of depression
                effectively.
              </p>
            </div>
          </div>
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image src={DryMassage} alt="Dry Massage" className="w-full" />
            <div className="p-6">
              <p className="text-primary text-2xl font-poppins font-semibold my-4">
                Oil Massage
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                Oil massage stimulates the skin, muscles, and tissues, while
                warm oil application enhances blood circulation and promotes
                relaxation.
              </p>
            </div>
          </div>
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image src={DryMassage} alt="Dry Massage" className="w-full" />
            <div>
              <p className="text-primary text-2xl font-poppins font-semibold my-4">
                Hot Massage
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                Hot oil massage, rooted in ancient healing traditions, offers
                timeless relaxation. Experience the best at Gulshan Spa Center.
              </p>
            </div>
          </div>
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image src={DryMassage} alt="Dry Massage" className="w-full" />
            <div>
              {" "}
              <p className="text-primary text-2xl font-poppins font-semibold my-4">
                Our Team
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                We offer a wide range of services tailored to your needs. Let us
                pamper you at Gulshan Spa Center.
              </p>
            </div>
          </div>{" "}
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image src={DryMassage} alt="Dry Massage" className="w-full" />
            <div>
              <p className="text-primary text-2xl font-poppins font-semibold my-4">
                Two Girls Massage
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                Experience the ultimate relaxation with our 2-girls massage
                service. Two skilled therapists ensure double the rejuvenation.
              </p>
            </div>
          </div>
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image src={DryMassage} alt="Dry Massage" className="w-full" />
            <div className="p-6">
              <p className="text-primary text-2xl font-poppins font-semibold my-4">
                Deep Tissue Massage
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                Deep tissue massage is a specialized technique that focuses on
                relieving tension in deeper muscle layers and connective
                tissues.
              </p>
            </div>
          </div>
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image src={DryMassage} alt="Dry Massage" className="w-full" />
            <div className="p-6">
              <p className="text-primary text-2xl font-poppins font-semibold my-4">
                Nuru Massage
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                Nuru massage combines traditional benefits with enhanced skin
                stimulation, promoting relaxation and improving blood
                circulation effectively.
              </p>
            </div>
          </div>{" "}
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image src={DryMassage} alt="Dry Massage" className="w-full" />
            <div className="p-6">
              <p className="text-primary text-2xl font-poppins font-semibold my-4">
                Body to Body Massage
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                Experience ultimate relaxation with our Body-to-Body massage at
                Gulshan Spa Center. Reconnect with yourself through this
                rejuvenating therapy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
