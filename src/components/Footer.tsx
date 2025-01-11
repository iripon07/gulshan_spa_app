import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between gap-x-4 text-center">
          <div>
            <p className="mb-7 text-lg text-[#323232]">About us</p>
            <p className="text-sm text-[#757575]">
              Come in and our therapists provide the perfect treatment. <br />{" "}
              Our massage is specially designed to help you achieve the <br />{" "}
              perfect mind-body harmony
            </p>
          </div>
          <div>
            <p className="mb-7 text-lg text-[#323232]">Open Hours</p>
            <p className="text-sm text-[#757575]">
              Mon-Fri: 9 AM – 6 PM <br /> Saturday: 9 AM – 4 PM <br /> Sunday:
              Closed
            </p>
          </div>
          <div>
            <p className="mb-7 text-lg text-[#323232]">About us</p>
            <p className="text-sm text-[#757575]">
              Gulshan-1, Road Number: #37,Dhaka-1212 <br /> Email:
              info@gulshanpointspacenter <br />
              Telephone: 01308494176
            </p>
          </div>
        </div>

        <div className="mt-12 border-[0.5px] border-gray-200"></div>

        <div className="my-12 flex items-center justify-center space-x-8 text-2xl text-secondary">
          <FaFacebookF className="duration-300 hover:text-primary" />
          <FaTwitter className="duration-300 hover:text-primary" />
          <FaInstagram className="duration-300 hover:text-primary" />
        </div>

        <div className="text-center text-sm">
          <p className="text-secondary">
            <span className="text-primary">Beauty Point Spa Center</span> ©
            2024 All Rights Reserved{" "}
            <span className="text-[#f9a392]">Terms of Use</span> and
            <span className="text-primary"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
