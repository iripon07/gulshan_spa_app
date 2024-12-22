import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"

const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        <div>
            <Image src={logo} alt="Logo of site" quality={100} width={100} height={100}></Image>
        </div>
        <div className="flex gap-x-6">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-gray-400">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </div>
        <div>
          <button className="text-white bg-secondary py-2 px-4 rounded-md hover:opacity-80 duration-300 font-semibold">Booking Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
