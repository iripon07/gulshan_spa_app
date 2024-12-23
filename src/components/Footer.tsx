import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto py-16">
        <div className="flex justify-between items-center text-center">
          <div>
            <p className="text-[#323232] text-lg mb-7">About us</p>
            <p className="text-[#757575] text-sm">
              Come in and our therapists provide the perfect treatment. <br />{" "}
              Our massage is specially designed to help you achieve the <br />{" "}
              perfect mind-body harmony
            </p>
          </div>
          <div>
            <p className="text-[#323232] text-lg mb-7">Open Hours</p>
            <p className="text-[#757575] text-sm">
              Mon-Fri: 9 AM – 6 PM <br /> Saturday: 9 AM – 4 PM <br /> Sunday:
              Closed
            </p>
          </div>
          <div>
            <p className="text-[#323232] text-lg mb-7">About us</p>
            <p className="text-[#757575] text-sm">
              176 W street name, New York, NY 10014 <br /> Email:
              info@yoursite.com <br />
              Telephone: +1(800)123-4566
            </p>
          </div>
        </div>

        <div className="border-[0.5px] border-gray-200 mt-12"></div>

        <div className="my-12 flex text-secondary justify-center items-center space-x-8 text-2xl">
          <FaFacebookF className="hover:text-primary duration-300" />
          <FaTwitter className="hover:text-primary duration-300" />
          <FaInstagram className="hover:text-primary duration-300" />
        </div>

        <div className="text-center text-sm">
          <p className="text-secondary">
            <span className="text-primary">Gulshan Spa</span> © 2024 All Rights
            Reserved <span className="text-[#f9a392]">Terms of Use</span> and
            <span className="text-primary"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
