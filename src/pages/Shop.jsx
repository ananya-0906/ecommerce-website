import "./Shop.css";
import Navbar from "../components/common/Navbar";
import ShopHeader from "../components/shop/ShopHeader";
import FilterSidebar from "../components/shop/FilterSidebar";

import ProductCard from "../components/cards/ProductCard";
import { shopProducts } from "../data/shopProducts";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import WhyChooseUs from "../components/home/WhyChooseUs";
import Newsletter from "../components/common/Newsletter";
import Footer from "../components/common/Footer";

function Shop(){

    const [searchParams] = useSearchParams();
    const categoryFromURL = searchParams.get("category");

    const [selectedCategory, setSelectedCategory] = useState( categoryFromURL || "All Products");

    useEffect(() => {
        setSelectedCategory(categoryFromURL || "All Products");
    }, [categoryFromURL]);

    
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const filteredProducts =
        selectedCategory === "All Products"
            ? shopProducts
            : shopProducts.filter(
                (product) =>
                    product.category === selectedCategory
            );

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    
    return(
        <>
            <Navbar />

            <main>
                <ShopHeader 
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <div className="shop-main">

                    <aside className="filter-sidebar">
                        <FilterSidebar />
                    </aside>

                    <div className="products-container">

                        <div className="product-grid">
                        
                            {currentProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}

                        </div>

                        <div className="pagination">

                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                Previous
                            </button>

                            <button
                                disabled={currentPage === 2}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                Next
                            </button>

                        </div>

                    </div>
                    

                    
                </div>
                <WhyChooseUs />
                <Newsletter />

            </main>

            <Footer />
        </>
    );
}

export default Shop;