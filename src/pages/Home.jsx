// src/pages/Home.jsx
import Hero from "../components/Home/Hero";
import ServicesPreview from "../components/Home/ServicesPreview"
import FeaturedProjects from "../components/Home/FeaturedProjects";
import CTASection from "../components/Home/CTASection";
import OurEquipment from "../components/Home/OurEquipment";
import ChooseUs from  "../components/Home/ChooseUs"
import OurLocation from "../components/Home/OurLocation";
function Home() {
  return (
    <div>
      <Hero />
       <ServicesPreview />
       <FeaturedProjects/>
       <OurEquipment />
       <ChooseUs />
       <OurLocation />
       <CTASection />
       


      {/* Add other sections here */}
    </div>
  );
}

export default Home;