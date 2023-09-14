import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import OurLeadership from "./pages/OurLeadership"
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/our-leadership" element={<OurLeadership />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;