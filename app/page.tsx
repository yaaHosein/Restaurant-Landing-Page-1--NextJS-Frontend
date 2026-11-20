/**
 * Home Page (route: /) – Single-page layout composing all sections.
 * No API calls; all content is static. MapDynamic loads the map only on the client (Leaflet needs window).
 */
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";

export default function Home() {
  return (
    <main className="w-full max-w-[15100px] bg-white inline-block bg-teal-400 mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Footer />
    </main>
  );
}
