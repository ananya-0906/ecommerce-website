import "./Wishlist.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WishlistCard from "../components/cards/WishlistCard";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {

    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleMoveToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product.id);
    };
    return (
        <>
            <Navbar />

            <main className="wishlist-page">

                <div className="wishlist-header">
                    <h2>My Wishlist</h2>
                    <p>{wishlist.length} Items</p>
                </div>

                {wishlist.length === 0 ? (
                    <div className="empty-wishlist">
                        <h2>Your Wishlist is Empty</h2>
                        <p>Save your favorite products here.</p>
                    </div>
                ) : (
                    <div className="wishlist-grid">

                        {wishlist.map((product) => (

                            <WishlistCard
                                key={product.id}
                                product={product}
                                onRemove={removeFromWishlist}
                                onMoveToCart={handleMoveToCart}
                            />

                        ))}

                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default Wishlist;