import "./TrendingProducts.css";
import ProductCard from "../cards/ProductCard";
import { trendingProducts } from "../../data/trendingProducts";

function TrendingProducts(){
    return(
        <section className="trending">

            <h2 className="section-title">Trending Products</h2>

                <div className="product-grid">
                    {trendingProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                    ))}
                </div>
        </section>
    );
}

export default TrendingProducts;