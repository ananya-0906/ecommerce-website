import "./Cart.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import CartCard from "../components/cards/CartCard";
import { useCart } from "../context/CartContext";

function Cart() {

    const{
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    } = useCart();

    if (cart.length === 0) {
        return (
            <>
                <Navbar />
                <main className="cart-page">

                    <div className="empty-cart">

                        <h2>Your Cart is Empty</h2>
                        <p>There is nothing in your bag. Let's add some items.  </p>

                        <Link to="/wishlist" className="cart-to-btn">ADD ITEMS FROM WISHLIST </Link>

                    </div>

                </main>
                <Footer />
            </>
        );
    }

    const total = cart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
    );

    return (
        <>
            <Navbar/>

            <main className="cart-page">

                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <p>{cart.length} Items</p>
                </div>

                <div className="cart-container">

                    <div className="cart-items">

                        {cart.map((item) => (

                            <CartCard
                                key={item.id}
                                product={item}
                                onIncrease={increaseQuantity}
                                onDecrease={decreaseQuantity}
                                onRemove={removeFromCart}
                            />

                        ))}

                    </div>

                    <div className="order-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Items</span>
                            <span>{cart.length}</span>
                        </div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>
                                ₹{total.toLocaleString()}
                            </span>
                        </div>

                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>

                        <hr />

                        <div className="summary-total">
                            <span>Total</span>

                            <strong>
                                ₹{total.toLocaleString()}
                            </strong>
                        </div>

                        <button className="checkout-btn">
                            Proceed to Checkout
                        </button>

                    </div>
                </div>        
            </main>
            <Footer />
        </>    
    );
}

export default Cart;