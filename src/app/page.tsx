import Bookings from "@/components/Bookings";
import Footer from "@/components/Footer";
import MakeAppointment from "@/components/MakeAppointment";
import Navbar from "@/components/Navbar";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Bookings />
      <MakeAppointment />
      <Testimonial />
      <Footer />
    </div>
  );
}
