import Arcticle from "./components/Arcticle/Arcticle";
import Banner from "./components/Banner/Banner";
import Details from "./components/Details/Details";

import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Herocta from "./components/Herocta/Herocta";
import Information from "./components/Information/Information";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Service from "./components/Services/Service";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />
      <Herocta />
      <Information />
      <Arcticle />
      <Banner />
      <News />
      <Service />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
