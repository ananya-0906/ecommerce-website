import "./ComparePreview.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CompareProduct(){
    return(
        <motion.section className="compare-section">

            <motion.div className="compare-container">

                <motion.div className="compare-content">
                    <h3>COMPARE PRODUCTS</h3>
                    <h5>Can't decide which one to buy?</h5>
                    <p>Compare Headphones, Earbuds and Speakers side by side <br></br> with detailed specifications and features.</p>
                    <Link to="/compare" className="compare-btn">Compare Now &rarr;</Link>
                </motion.div>

                <div className="compare-desc">

                    <div className="desc-item">
                        <div className="desc-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale-icon lucide-scale"><path d="M12 3v18"/><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M7 21h10"/></svg>
                        </div>
                        <p>Side by side comparison</p>
                    </div>
                    
                    <div className="desc-item">
                        <div className="desc-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                        </div>
                        <p>Detailed specifications</p>
                    </div>
                    
                    <div className="desc-item">
                        <div className="desc-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag-icon lucide-tag"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                        </div>
                        <p>Better decision, smarter choice</p>
                    </div>
                    
                </div>
            </motion.div>
        </motion.section>
    );
}

export default CompareProduct;