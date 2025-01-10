
import BodyToBodyMassage from "@/assets/bodyTobody.jpg";
import DeepTissueMassage from "@/assets/DeepTissueMassage.jpg";
import DryMassage from "@/assets/dryMassage.avif";
import HotMassage from "@/assets/HotMassage.jpg";
import NuruMassage from "@/assets/nuruMassage.webp";
import OilMassage from "@/assets/OilMassage.jpg";
import OurTeam from "@/assets/OurTeam.jpg";
import TwoGirls from "@/assets/TwoGirls.avif";
import Image from "next/image";

const Features = () => {
  return (
    <div className="features">
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
            <Image
              src={DryMassage}
              alt="Dry Massage"
              className="w-full h-[200px] rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="text-primary text-2xl font-poppins font-semibold">
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
            <Image
              src={OilMassage}
              alt="Dry Massage"
              className="w-full h-[200px] rounded-t-md"
            />
            <div className="p-3">
              <p className="text-primary text-2xl font-poppins font-semibold">
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
            <Image
              src={HotMassage}
              alt="Dry Massage"
              className="w-full h-[200px] rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="text-primary text-2xl font-poppins font-semibold">
                Hot Massage
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                Hot oil massage, rooted in ancient healing traditions, offers
                timeless relaxation. Experience the best at Gulshan Spa Center.
              </p>
            </div>
          </div>
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image
              src={OurTeam}
              alt="Dry Massage"
              className="w-full h-[200px] rounded-md-t"
              quality={100}
            />
            <div className="p-3">
              {" "}
              <p className="text-primary text-2xl font-poppins font-semibold">
                Our Team
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                We offer a wide range of services tailored to your needs. Let us
                pamper you at Gulshan Spa Center.
              </p>
            </div>
          </div>{" "}
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image
              src={TwoGirls}
              alt="Dry Massage"
              className="w-full h-[200px] rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="text-primary text-2xl font-poppins font-semibold">
                Two Girls Massage
              </p>
              <p className="text-secondary text-base font-prosto font-medium">
                Experience the ultimate relaxation with our 2-girls massage
                service. Two skilled therapists ensure double the rejuvenation.
              </p>
            </div>
          </div>
          <div className="shadow-md rounded-md hover:shadow-none duration-300">
            <Image
              src={DeepTissueMassage}
              alt="Dry Massage"
              className="w-full h-[200px] rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="text-primary text-2xl font-poppins font-semibold">
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
            <Image
              src={NuruMassage}
              alt="Dry Massage"
              className="w-full h-[200px] rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="text-primary text-2xl font-poppins font-semibold">
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
            <Image
              src={BodyToBodyMassage}
              alt="Dry Massage"
              className="w-full h-[200px] rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="text-primary text-2xl font-poppins font-semibold">
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
