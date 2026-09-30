import "./ShopByCategory.css";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { categories } from "../../data/categoryData";
import { useNavigate } from "react-router-dom";

function ShopByCategory(){
    const navigate = useNavigate();

    const scrollRef = useRef(null);
    
        const scroll = (direction) => {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -404 : 404,
                behavior: "smooth",
            });
        };

    return(
        <section className="category-container">

            <h2 className="category-title">Explore by category</h2>

            <div className="category-grid" ref={scrollRef}>
                {categories.map((category) => (
                <div
                    key={category.id}
                    className="category-card"
                    onClick={() => navigate(`/shop?category=${category.title}`)}
                >
                    <div className="category-image">
                        <img
                            src={category.image}
                            alt={category.title}
                        />
                    </div>

                    <div className="category-overlay">
                        <span>SHOP NOW</span>
                        <h3>{category.title}</h3>
                        <div className="arrow">≫</div>
                    </div>

                </div>
                ))}
            </div>

            <div className="category-navigation">
                <button
                    className="nav-btn"
                    onClick={() => scroll("left")}
                >
                    <FiChevronLeft />
                </button>

                <button
                    className="nav-btn"
                    onClick={() => scroll("right")}
                >
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
}

export default ShopByCategory;