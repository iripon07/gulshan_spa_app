import Bookings from "@/components/Bookings";
import Footer from "@/components/Footer";
import MakeAppointment from "@/components/MakeAppointment";
import Navbar from "@/components/Navbar";
import Testimonial from "../components/Testimonial";
import Banner from "@/components/Banner";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Bookings />
      <Services />
      <MakeAppointment />
      <Testimonial />
      <Footer />
    </div>
  );
}
