import "./CartCard.css";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

function CartCard({ product, onIncrease, onDecrease, onRemove }) {
    return (
        <div className="cart-card">

            <div className="cart-product-image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="cart-product-info">

                <p className="cart-brand">{product.brand} </p>
                <h3 className="cart-product-name"> {product.name} </h3>
                <p className="cart-price"> ₹{product.price}</p>

                <div className="cart-bottom">

                    <div className="quantity-control">

                        <button
                            onClick={() => onDecrease(product.id)}
                            disabled={product.quantity === 1}
                        >
                            <FiMinus />
                        </button>

                        <span> {product.quantity} </span>

                        <button
                            onClick={() => onIncrease(product.id)}
                        >
                            <FiPlus />
                        </button>

                    </div>

                    <button
                        className="remove-cart"
                        onClick={() => onRemove(product.id)}
                    >
                        <FiTrash2 />
                        Remove
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CartCard;