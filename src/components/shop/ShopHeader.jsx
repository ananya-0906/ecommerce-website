import "./ShopHeader.css";

function ShopHeader({
    selectedCategory,
    setSelectedCategory
}){
    return(
        <section className="shop-container">
            <div className="shop-head">
                <h3>Shop</h3>
                <p>Premium audio gear for every <br></br>passion and every moment.</p>
            </div>

            <div className="category-section">

                <div className="category-tabs">
                    <button 
                        className={selectedCategory === "All Products" ? "active" : ""}
                        onClick={() => setSelectedCategory("All Products")}>
                            All Products
                    </button>

                    <button 
                        className={selectedCategory === "Headphones" ? "active" : ""}
                        onClick={() => setSelectedCategory("Headphones")}>
                            Headphones
                    </button>

                    <button 
                        className={selectedCategory === "Earbuds" ? "active" : ""}
                        onClick={() => setSelectedCategory("Earbuds")}>
                        Earbuds
                    </button>

                    <button 
                        className={selectedCategory === "Speaker" ? "active" : ""}
                        onClick={() => setSelectedCategory("Speaker")}>
                            Speaker
                    </button>

                    <button 
                        className={selectedCategory === "Soundbars" ? "active" : ""}
                        onClick={() => setSelectedCategory("Soundbars")}>
                            Soundbar
                    </button>
                </div>
                
                <div className="sort-dropdown">
                    <label htmlFor="sort">Sort by :</label>

                    <select id="sort">
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
        </section>
    );
}

export default ShopHeader;