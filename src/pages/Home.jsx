import Navbar from "../components/common/Navbar";
import HeroSlider from "../components/home/HeroSlider";
import BrandStrip from "../components/home/BrandStrip";
import TrendingProducts from "../components/home/TrendingProducts";
import ShopByCategory from "../components/home/ShopByCategory";
import ComparePreview from "../components/home/ComparePreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Newsletter from "../components/common/Newsletter";
import Footer from "../components/common/Footer";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".home-animate");
    sections.forEach((section) => {
      gsap.from(section, {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
    
  }, []);

  return (
    <>
      <Navbar />

      <main>

        <div className="home-animate"><HeroSlider /></div>
        <div className="home-animate"><BrandStrip /></div>
        <div className="home-animate"><TrendingProducts /></div>
        <div className="home-animate"><ShopByCategory /></div>
        <div className="home-animate"><ComparePreview /></div>
        <div className="home-animate"><WhyChooseUs /></div>
        <div className="home-animate"><Newsletter /></div>
        
      </main>

      <Footer />
    </>
  );
}

export default Home;