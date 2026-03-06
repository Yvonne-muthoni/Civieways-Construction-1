// src/pages/Home.jsx
import Hero from "../components/Home/Hero";
import ServicesPreview from "../components/Home/ServicesPreview";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import AboutPreview from "../components/Home/AboutPreview";
import CTASection from "../components/Home/CTASection";
function Home() {
  return (
    <div>
      <Hero />
       <ServicesPreview />
       <FeaturedProjects />
       <AboutPreview />
       <CTASection />


      {/* Add other sections here */}
    </div>
  );
}

export default Home;