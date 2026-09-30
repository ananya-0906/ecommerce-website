import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");

        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );
    }, [wishlist]);

    // Add product to wishlist
    const addToWishlist = (product) => {
        setWishlist((currentWishlist) => {

            const alreadyExists = currentWishlist.some(
                (item) => item.id === product.id
            );

            // Don't add same product twice
            if (alreadyExists) {
                return currentWishlist;
            }

            return [...currentWishlist, product];
        });
    };

    // Remove product from wishlist
    const removeFromWishlist = (productId) => {
        setWishlist((currentWishlist) =>
            currentWishlist.filter(
                (item) => item.id !== productId
            )
        );
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}