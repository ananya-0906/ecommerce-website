import bose from "../assets/trending/bose.png";
import sony from "../assets/trending/sony.png";
import marshall from "../assets/trending/marshall.png";
import sumsang from "../assets/trending/sumsang.png";

export const trendingProducts = [
    {
        id:1,
        brand: "BOSE",
        name: "QuietComfort ultra",
        rating:4.5,
        desc:"Premium noise cancellation with rich, immersive sound.",
        price:17043,
        image:bose,

        colors: ["#cfc8ff", "#000000"] 
    },
    {
        id:2,
        brand: "SONY",
        name: "WF-1000XM5",
        rating:4.8,
        desc:"Flagship wireless earbuds with exceptional ANC and audio quality.",
        price:29990,
        image:sony,

        colors: ["#cfc8ff", "#000000"] 
    },
    {
        id:3,
        brand: "Marshall",
        name: "Emberton III",
        rating:4.8,
        desc:"Portable speaker with 32+ hours of playtime.",
        price:16499,
        image:marshall,

        colors: ["#cfc8ff", "#000000"] 
    },
    {
        id:4,
        brand: "Samsung",
        name: "HW-Q990F",
        rating:4.8,
        desc:"Flagship Dolby Atmos soundbar with powerful 11.1.4-channel surround sound.",
        price:92990,
        image:sumsang,

        colors: ["#cfc8ff", "#000000"] 
    },
];