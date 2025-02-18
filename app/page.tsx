
import Hero from "./components/hero";
import Heroone from "./components/Heroone";
import TopPicks from "./components/TopPicks";
import NewArrivals from "./components/NewArrivals";
import Belog from "./components/Belog";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Hero />
      <Heroone />
      <TopPicks />
      <NewArrivals />
      <Belog />
      <Instagram />
      <Footer />
    </div>
  );
}
