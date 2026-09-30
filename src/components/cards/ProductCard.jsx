import "./ProductCard.css";
import { FaHeart, FaRegHeart,  FaStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function ProductCard({ product }){

    const { addToCart } = useCart();

    const [addedToCart, setAddedToCart] = useState(false);

    const handleCartClick = () => {
        addToCart(product);
        setAddedToCart(true);
    };

    const { wishlist, addToWishlist } = useWishlist();
    const isInWishlist = wishlist.some(
        (item) => item.id === product.id
    );

    return(
        <div className="product-card">

            <button 
                className="wishlist-btn "
                onClick={() => addToWishlist(product)}
            > 
                {isInWishlist ? (
                    <FaHeart color="red" /> 
                ) : ( <FaRegHeart /> )}
            </button>

            <div className="product-image">
                <img 
                    src={product.image} 
                    alt={product.name} 
                />
            </div>

            <div className="product-info">
                <p className="brand">{product.brand}</p>
                <h3 className="product-name">{product.name}</h3>

                <div className="product-opttions">
                    <div className="rating">
                        <FaStar /> 
                        {product.rating}
                    </div>
                </div>

                <h2 className="price">₹{product.price}</h2>

                <button 
                    className="cart-btn"
                    onClick={handleCartClick}
                >
                    <FiShoppingBag />
                    {addedToCart
                        ? "Go to Cart"
                        : "Add to Cart"
                    }
                </button>
            </div>
        </div>
    );
}

export default ProductCard;