import Bookings from "@/components/Bookings";
import Footer from "@/components/Footer";
import MakeAppointment from "@/components/MakeAppointment";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Bookings />
      <MakeAppointment />
      <Footer />
    </div>
  );
}
