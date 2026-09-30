import "./WishlistCard.css";
import { FiX } from "react-icons/fi";

function WishlistCard({ product, onRemove, onMoveToCart }) {

    return (
        <div className="wishlist-card">

            
            <div className="wishlist-image">
                <img src={product.image} alt={product.name} />
                <button
                    className="remove-wishlist"
                    onClick={() => onRemove(product.id)}
                >
                    <FiX />
                </button>
            </div>

          
            <div className="wishlist-info">
                <p className="wishlist-brand">{product.brand}</p>
                <h3 className="wishlist-name"> {product.name} </h3>

                <div className="wishlist-price">
                    <span className="current-price"> ₹{product.price}</span>
                </div>

            </div>
            <button
                className="move-to-cart"
                onClick={() => onMoveToCart(product)}
            >
                MOVE TO CART
            </button>

        </div>
    );
}

export default WishlistCard;