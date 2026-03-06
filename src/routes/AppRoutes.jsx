import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Clients from "../pages/Clients";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default AppRoutes;