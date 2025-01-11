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
          <p className="font-prosto text-lg font-medium text-primary">
            Amazing Features
          </p>
          <p className="font-poppins text-2xl font-semibold text-secondary md:text-4xl xl:text-6xl">
            Our Spa can offer you
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="rounded-md shadow-md duration-300 hover:shadow-none">
            <Image
              src={DryMassage}
              alt="Dry Massage"
              className="h-[200px] w-full rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="font-poppins text-2xl font-semibold text-primary">
                Dry Massage
              </p>
              <p className="font-poppins text-base font-medium text-secondary">
                Dry massage therapy offers deep relaxation, helping to alleviate
                stress, reduce anxiety, and combat symptoms of depression
                effectively.
              </p>
            </div>
          </div>
          <div className="rounded-md shadow-md duration-300 hover:shadow-none">
            <Image
              src={OilMassage}
              alt="Dry Massage"
              className="h-[200px] w-full rounded-t-md"
            />
            <div className="p-3">
              <p className="font-poppins text-2xl font-semibold text-primary">
                Oil Massage
              </p>
              <p className="font-poppins text-base font-medium text-secondary">
                Oil massage stimulates the skin, muscles, and tissues, while
                warm oil application enhances blood circulation and promotes
                relaxation.
              </p>
            </div>
          </div>
          <div className="rounded-md shadow-md duration-300 hover:shadow-none">
            <Image
              src={HotMassage}
              alt="Dry Massage"
              className="h-[200px] w-full rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="font-poppins text-2xl font-semibold text-primary">
                Hot Massage
              </p>
              <p className="font-poppins text-base font-medium text-secondary">
                Hot oil massage, rooted in ancient healing traditions, offers
                timeless relaxation. Experience the best at Beauty Point Spa
                Center.
              </p>
            </div>
          </div>
          <div className="rounded-md shadow-md duration-300 hover:shadow-none">
            <Image
              src={OurTeam}
              alt="Dry Massage"
              className="rounded-md-t h-[200px] w-full"
              quality={100}
            />
            <div className="p-3">
              {" "}
              <p className="font-poppins text-2xl font-semibold text-primary">
                Our Team
              </p>
              <p className="font-poppins text-base font-medium text-secondary">
                We offer a wide range of services tailored to your needs. Let us
                pamper you at Beauty Point Spa Center.
              </p>
            </div>
          </div>{" "}
          <div className="rounded-md shadow-md duration-300 hover:shadow-none">
            <Image
              src={TwoGirls}
              alt="Dry Massage"
              className="h-[200px] w-full rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="font-poppins text-2xl font-semibold text-primary">
                Two Girls Massage
              </p>
              <p className="font-poppins text-base font-medium text-secondary">
                Experience the ultimate relaxation with our 2-girls massage
                service. Two skilled therapists ensure double the rejuvenation.
              </p>
            </div>
          </div>
          <div className="rounded-md shadow-md duration-300 hover:shadow-none">
            <Image
              src={DeepTissueMassage}
              alt="Dry Massage"
              className="h-[200px] w-full rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="font-poppins text-2xl font-semibold text-primary">
                Deep Tissue Massage
              </p>
              <p className="font-poppins text-base font-medium text-secondary">
                Deep tissue massage is a specialized technique that focuses on
                relieving tension in deeper muscle layers and connective
                tissues.
              </p>
            </div>
          </div>
          <div className="rounded-md shadow-md duration-300 hover:shadow-none">
            <Image
              src={NuruMassage}
              alt="Dry Massage"
              className="h-[200px] w-full rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="font-poppins text-2xl font-semibold text-primary">
                Nuru Massage
              </p>
              <p className="font-poppins text-base font-medium text-secondary">
                Nuru massage combines traditional benefits with enhanced skin
                stimulation, promoting relaxation and improving blood
                circulation effectively.
              </p>
            </div>
          </div>{" "}
          <div className="rounded-md shadow-md duration-300 hover:shadow-none">
            <Image
              src={BodyToBodyMassage}
              alt="Dry Massage"
              className="h-[200px] w-full rounded-t-md"
              quality={100}
            />
            <div className="p-3">
              <p className="font-poppins text-2xl font-semibold text-primary">
                Body to Body Massage
              </p>
              <p className="font-poppins text-base font-medium text-secondary">
                Experience ultimate relaxation with our Body-to-Body massage at
                Beauty Point Spa Center. Reconnect with yourself through this
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
