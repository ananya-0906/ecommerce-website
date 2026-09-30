import "./FilterSidebar.css";
import { useState } from "react";

function FilterSidebar(){

    const [showAllBrands, setShowAllBrands] = useState(false);
    const brands = [
        { name: "Sony", count: 4 },
        { name: "Bose", count: 4 },
        { name: "Noise", count: 1 },
        { name: "JBL", count: 2 },
        { name: "Apple", count: 2 },
        { name: "Marshall", count: 2 },
        { name: "HyperX", count: 1 },
        { name: "Razer", count: 1 },
    ];
    const visibleBrands = showAllBrands
        ? brands
        : brands.slice(0, 5);


    const colors = [
        "#000000",
        "#ffffff",
        "#4c617a",
        "#d7c8ae",
    ];
    const [showAllColors, setShowAllColors] = useState(false);
    const visibleColors = showAllColors
        ? colors
        : colors.slice(0,5);


    const features = [
        {name:"Wireless"},
        {name:"Noise Cancelling"},
        {name:"Water Resistant"},
        {name:"Built-in Mic"},
        {name:"Bluetooth 5.3"},
        {name:"Spatial Audio"}
    ];
    const [showAllFeatures,setShowAllFeatures]=useState(false);
    const visibleFeatures = showAllFeatures
    ? features
    : features.slice(0,4);

    return(
        <aside className="filter-sidebar">

            <div className="filter-header">
                <h3>Filters</h3>
                <button>Clear All</button>
            </div>

            <div className="filter-section">

                <div className="filter-title">
                    <h4>Brand</h4>
                </div>

                {visibleBrands.map((brand) => (
                    <label key={brand.name} className="checkbox-item">
                        <input type="checkbox" />
                        <span> {brand.name} ({brand.count}) </span>
                    </label>
                ))}

                <button
                    className="see-more-btn"
                    onClick={() => setShowAllBrands(!showAllBrands)}
                >
                    {showAllBrands ? "See Less ▲" : "See More ▼"}
                </button>
            </div>

            <div className="filter-section">

                <div className="filter-heading">
                    <h4>Price</h4>
                </div>

                <div className="price-values">
                    <span>₹1,999</span>
                    <span>₹59,990+</span>
                </div>

                <input
                    type="range"
                    min="1999"
                    max="59990"
                    className="price-slider"
                />
            </div>

            <div className="filter-section">

                <div className="filter-heading">
                    <h4>Color</h4>
                </div>

                <div className="color-list">

                    {visibleColors.map((color,index)=>(
                        <span
                            key={index}
                            className="color-circle"
                            style={{background:color}}
                        ></span>
                    ))}

                </div>

            </div>

            <div className="filter-section">

                <div className="filter-heading">
                    <h4>Features</h4>
                </div>

                {visibleFeatures.map((feature)=>(
                    <label
                        key={feature.name}
                        className="checkbox-item"
                    >
                        <input type="checkbox"/>
                        <span>{feature.name}</span>
                    </label>
                ))}

                <button
                    className="see-more-btn"
                    onClick={()=>setShowAllFeatures(!showAllFeatures)}
                >
                    {showAllFeatures ? "See Less ▲" : "See More ▼"}
                </button>
            </div>
        </aside>
    );
}

export default FilterSidebar;