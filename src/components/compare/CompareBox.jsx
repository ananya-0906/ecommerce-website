import "./CompareBox.css"; 
import { useState } from "react";
import { Search, Plus, X } from "lucide-react";
import { shopProducts } from "../../data/shopProducts";

function CompareBox({onCompare}) {

    const [product1, setProduct1] = useState(null);
    const [product2, setProduct2] = useState(null);

    const [activeBox, setActiveBox] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddProduct = (box) => {
        setActiveBox(box);
        setSearchTerm("");
    };

    const handleSelectProduct = (product) => {

        if (
                (activeBox === 1 && product2?.id === product.id) ||
                (activeBox === 2 && product1?.id === product.id)
        ) {
            return;
        }

         if (activeBox === 1) {
            setProduct1(product);
        }

        if (activeBox === 2) {
            setProduct2(product);
        }

        setActiveBox(null);
        setSearchTerm("");
    };   
    
    const handleRemoveProduct = (box) => {
        if (box === 1) {
            setProduct1(null);
        }

        if (box === 2) {
            setProduct2(null);
        }

        setSearchTerm("");
    };

    const filteredProducts = shopProducts.filter((product) =>
        product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const handleCompare = () => {
        if (!product1 || !product2) {
            return;
        }
        onCompare(product1, product2);
    };

    return (
        <section className="compare-box">

            <div className="compare-prd-box">

                <div 
                    className="compare-product"
                    onClick={() => handleAddProduct(1)}
                >
                    {!product1 ? (
                        <>
                            <div className="add-icon">
                                <Plus />
                            </div>
                            <h3>Add Product</h3>
                            <p>Search  a product to compare</p>
                        </>
                    ) : (
                        <>
                            <img
                                src={product1.image}
                                alt={product1.name}
                                className="compare-product-image"
                            />
                            <h3>{product1.name}</h3>
                            <p> ₹{product1.price.toLocaleString()} </p>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveProduct(1);
                                }}
                            >
                                Change Product
                            </button>
                        </>
                    )}
                </div>

                <div className="vs"> VS </div>

                <div 
                    className="compare-product"
                    onClick={() => handleAddProduct(2)}
                >
                    {!product2 ? (
                        <>
                            <div className="add-icon">
                                <Plus />
                            </div>
                            <h3>Add Product</h3>
                            <p>Search  a product to compare</p>
                        </>
                    ) : (
                        <>
                            <img
                                src={product2.image}
                                alt={product2.name}
                                className="compare-product-image"
                            />
                            <h3>{product2.name}</h3>
                            <p> ₹{product2.price.toLocaleString()} </p>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveProduct(2);
                                }}
                            >
                                Change Product
                            </button>
                        </>
                    )}
                </div>

            </div>

            {activeBox && (
                <div className="product-search">

                    <div className="search-header">
                        <h3>Search Product</h3>
                        <X
                            onClick={() => {
                                setActiveBox(null);
                                setSearchTerm("");
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    </div>

                    <div className="search-input">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => 
                                setSearchTerm(e.target.value)
                            }
                        />
                    </div>

                    <div className="product-list">

                        {filteredProducts.length > 0 ? (

                            filteredProducts.map((product) => {

                                const alreadySelected =
                                    product1?.id === product.id ||
                                    product2?.id === product.id;

                                return (
                                    <div
                                        key={product.id}
                                        className={`product-option ${
                                            alreadySelected
                                                ? "disabled-product"
                                                : ""
                                        }`}
                                        onClick={() => {

                                            if (!alreadySelected) {
                                                handleSelectProduct(product);
                                            }

                                        }}
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />

                                        <div className="product-option-info">
                                            <h4>{product.name}</h4>
                                            <p> ₹{product.price.toLocaleString()}</p>
                                        </div>

                                        {alreadySelected && (
                                            <span>
                                                Selected
                                            </span>
                                        )}

                                    </div>
                                );

                            })

                        ) : (

                            <p className="no-products"> No products found</p>

                        )}

                    </div>

                </div>
            )}

            <button 
                className="compare-page-btn"
                disabled={!product1 || !product2}
                onClick={handleCompare}
            >
                Compare Now →
            </button>

        </section>
    );
}

export default CompareBox;