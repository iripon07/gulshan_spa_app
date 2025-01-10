import About from "@/components/About";
import Address from "@/components/Address";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import MakeAppointment from "@/components/MakeAppointment";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <Services />
      <MakeAppointment />
      <About />
      <Address />
      <Testimonial />
      <Footer />
    </div>
  );
}
