import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Prefer state.scrollTo, fallback to hash
    const scrollTarget = location.state?.scrollTo || (location.hash ? location.hash.replace('#', '') : null);
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        // Small timeout to allow the page to render
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
        // remove state to avoid repeated scrolling when navigating elsewhere
        try {
          navigate(location.pathname, { replace: true, state: {} });
        } catch (err) {
          // ignore
        }
      }
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
