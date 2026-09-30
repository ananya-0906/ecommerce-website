import "./Compare.css";

import Navbar from "../components/common/Navbar";
import CompareBox from "../components/compare/CompareBox";
import ComparisonResult from "../components/compare/ComparisonResult";
import HowItWorks from "../components/compare/HowItWorks";
import Newsletter from "../components/common/Newsletter";
import Footer from "../components/common/Footer";

import { useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Compare(){

  const [compareProducts, setCompareProducts] = useState(null);
  
  useEffect(() => {

    const sections = gsap.utils.toArray(".compare-animate");
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

  const handleCompare = (product1, product2) => {

        setCompareProducts({
            product1,
            product2,
        });

    };

    return(
        <>
            <Navbar />

            <main>
                <div className="compare-animate">
                    <div className="compare-hero">
                        <h1>Compare Products</h1>
                        <p>Compare features, specifications, and prices <br/> to find the perfect audio product.</p>
                    </div>
                </div>
                
                <div className="compare-animate">
                  <CompareBox onCompare={handleCompare} />
                </div>

                {compareProducts && (
                  <div className="compare-animate">
                    <ComparisonResult
                      product1={compareProducts.product1}
                      product2={compareProducts.product2}
                    />
                  </div>
                )}
                <div className="compare-animate"><HowItWorks /></div>
                <div className="compare-animate"><Newsletter /></div>

            </main>

            <Footer />

        </>
    );
}

export default Compare;