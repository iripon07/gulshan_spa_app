import Bookings from "@/components/Bookings";
import Footer from "@/components/Footer";
import MakeAppointment from "@/components/MakeAppointment";
import Navbar from "@/components/Navbar";
import Testimonial from "../components/Testimonial";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Bookings />
      <Features />
      <Services />
      <MakeAppointment />
      <Testimonial />
      <Footer />
    </div>
  );
}
