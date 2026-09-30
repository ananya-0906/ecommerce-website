import "./HowItWorks.css";
import { Search, Headphones, SlidersHorizontal, CircleCheck } from "lucide-react";

function HowItWorks(){
    return(
        <>
            <section className="how-it-works">

                <div className="how-container">
                    <h3>How It Works</h3>

                    <div className="how-steps">

                        <div className="step">
                            <div className="step-icon">
                                <span className="step-number">1</span>
                                <Search />
                            </div>

                            <h4>Search Products</h4>
                            <p>Search for any audio products you want to compare.</p>
                        </div>

                        <div className="step-line"></div>

                        <div className="step">
                            <div className="step-icon">
                                <span className="step-number">2</span>
                                <Headphones />
                            </div>

                            <h4>Add to Compare</h4>
                            <p>Select up to 2 products to compare side-by-side.</p>
                        </div>

                        <div className="step-line"></div>

                        <div className="step">
                            <div className="step-icon">
                                <span className="step-number">3</span>
                                <SlidersHorizontal />
                            </div>

                            <h4>Compare Specs</h4>
                            <p>View detailed specifications and features in one place.</p>
                        </div>

                        <div className="step-line"></div>

                        <div className="step">
                            <div className="step-icon">
                                <span className="step-number">4</span>
                                <CircleCheck />
                            </div>

                            <h4>Choose the Best</h4>
                            <p>Pick the perfect product that matches your needs.</p>
                        </div>
                        
                    </div>
                </div>    
            </section>
        </>

    );
}

export default HowItWorks;
