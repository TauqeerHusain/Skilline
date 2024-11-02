import AllInOne from "./components/All-In-One.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Integrations from "./components/Integrations.jsx";
import Navbar from "./components/Navbar.jsx";
import News from "./components/News.jsx";
import OurFeatures from "./components/OurFeatures.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhatIsSkilline from "./components/WhatIsSkilline.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AllInOne />
      <WhatIsSkilline />
      <OurFeatures />
      <Integrations />
      <Testimonials />
      <News />
      <Footer />
    </>
  );
}

export default App;
