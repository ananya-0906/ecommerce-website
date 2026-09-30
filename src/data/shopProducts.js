import airpods from "../assets/products/airpods.webp";
import airpods3 from "../assets/products/airpods3.webp";
import O3M from "../assets/products/O3M.webp";
import emberton3 from "../assets/products/emberton3.webp";
import hyperXheadphones from "../assets/products/hyperXheadphones.webp";
import jblLive from "../assets/products/jbl-live.webp";
import JBLBar500  from "../assets/products/JBLBar500.webp";
import monitor from "../assets/products/monitor-iii.webp";
import noisebuds from "../assets/products/noisebuds.webp";
import quietcomfort from "../assets/products/quietcomfort.webp";
import quietBuds from "../assets/products/quit-earbuds.webp";
import razerheadphones from "../assets/products/razerheadphones.png";
import smart from "../assets/products/smart-ultra.webp";
import soundlink from "../assets/products/soundlink.webp";
import sumsang from "../assets/products/sumsang2.webp";
import ult7 from "../assets/products/ult7.webp";
import xm5 from "../assets/products/xm5.jpg";
import inzone5 from "../assets/products/inzone5.webp";

export const shopProducts = [
    {
        id: 1,
        brand: "Sony",
        name: "WH-1000XM5",
        category: "Headphones",
        price: 29990,
        image: xm5,
        rating: 4.8,

        activeNoiseCancellation: "Yes",
        bluetoothMultipoint: "Yes",
        batteryLife: "30 hours",
        connectivity: "Bluetooth 5.2, 3.5mm"
    },
    {
        id: 2,
        brand: "Apple",
        name: "AirPods Pro 3",
        category: "Earbuds",
        price: 26900,
        image: airpods3,
        rating: 4.8,

        activeNoiseCancellation: "Yes",
        bluetoothMultipoint: "No",
        batteryLife: "8 hours (ANC)",
        connectivity: "Bluetooth 5.3, USB-C charging"
    },
    {
        id: 3,
        brand: "razer",
        name: "BlackShark V2 Pro",
        category: "Gaming",
        price: 18999,
        image: razerheadphones,
        rating: 4.8,

        activeNoiseCancellation: "No",
        bluetoothMultipoint: "No",
        batteryLife: "Up to 70 hours",
        connectivity: "2.4GHz HyperSpeed, Bluetooth 5.2"

    },
    {
        id: 4,
        brand: "Bose",
        name: "SoundLink Max",
        category: "Speaker",
        price: 39900,
        image: soundlink,
        rating: 4.8,

        activeNoiseCancellation: "N/A",
        bluetoothMultipoint: "Yes",
        batteryLife: "Up to 20 hours",
        connectivity: "Bluetooth 5.4, 3.5mm AUX, USB-C"
    },
    {
        id: 5,
        brand: "NOISE",
        name: "Buds X Ultra",
        category: "Earbuds",
        price: 1799,
        image: noisebuds,
        rating: 4.8,

        activeNoiseCancellation: "Yes",
        bluetoothMultipoint: "Yes",
        batteryLife: "Up to 7 hours (ANC)",
        connectivity: "Bluetooth 5.3, USB-C"    
    },
    {
        id: 6,
        brand: "hyperX",
        name: "Cloud III Wireless",
        category: "Gaming",
        price: 16990,
        image: hyperXheadphones,
        rating: 4.8,

        activeNoiseCancellation: "No",
        bluetoothMultipoint: "No",
        batteryLife: "Up to 120 hours",
        connectivity: "2.4GHz wireless, USB"
    },
    {
        id: 7,
        brand: "JBL",
        name: "Bar 500",
        category: "Soundbars",
        price: 49999,
        image: JBLBar500,
        rating: 4.8,

        activeNoiseCancellation: "N/A",
        bluetoothMultipoint: "No",
        batteryLife: "N/A",
        connectivity: "Bluetooth 5.0, Wi-Fi, HDMI eARC, Optical, USB"
    },
    {
        id: 8,
        brand: "Apple",
        name: "AirPods Max",
        category: "Headphones",
        price: 59900,
        image: airpods,
        rating: 4.8,

        activeNoiseCancellation: "Yes",
        bluetoothMultipoint: "No",
        batteryLife: "Up to 20 hours",
        connectivity: "Bluetooth 5.3, USB-C"
    },
    {
        id: 9,
        brand: "Sony",
        name: "ULT Field 7",
        category: "Speaker",
        price: 29999,
        image: ult7,
        rating: 4.8,

        activeNoiseCancellation: "N/A",
        bluetoothMultipoint: "No",
        batteryLife: "Up to 30 hours",
        connectivity: "Bluetooth 5.2, 3.5mm, USB-A"
    },
    {
        id: 10,
        brand: "Sony",
        name: "INZONE H5",
        category: "Gaming",
        price: 14990,
        image: inzone5,
        rating: 4.8,

        activeNoiseCancellation: "No",
        bluetoothMultipoint: "No",
        batteryLife: "Up to 28 hours",
        connectivity: "2.4GHz wireless, 3.5mm"
    },
    {
        id: 11,
        brand: "Bose",
        name: "QuietComfort Ultra Earbuds",
        category: "Earbuds",
        price: 25900,
        image: quietBuds,
        rating: 4.8,

        activeNoiseCancellation: "Yes",
        bluetoothMultipoint: "Yes",
        batteryLife: "Up to 6 hours",
        connectivity: "Bluetooth 5.3, USB-C"
    },
    {
        id: 12,
        brand: "Samsung",
        name: "HW-Q990F",
        category: "Sounbars",
        price: 124900,
        image: sumsang,
        rating: 4.8,

        activeNoiseCancellation: "N/A",
        bluetoothMultipoint: "N/A",
        batteryLife: "N/A",
        connectivity: "Bluetooth 5.3, Wi-Fi, HDMI eARC, Optical"
    },
    {
        id: 13,
        brand: "Bose",
        name: "QuietComfort Headphones",
        category: "Headphones",
        price: 19900,
        image: quietcomfort,
        rating: 4.8,

        activeNoiseCancellation: "Yes",
        bluetoothMultipoint: "Yes",
        batteryLife: "Up to 24 hours",
        connectivity: "Bluetooth, 3.5mm"
    },
    {
        id: 14,
        brand: "Bose",
        name: "Smart Ultra Soundbar",
        category: "Soundbars",
        price: 94900,
        image: smart,
        rating: 4.8,

        activeNoiseCancellation: "N/A",
        bluetoothMultipoint: "N/A",
        batteryLife: "N/A",
        connectivity: "Bluetooth 5.0, Wi-Fi, HDMI eARC, Optical"
    },    
    {
        id: 15,
        brand: "JBL",
        name: "Live Beam 3",
        category: "Headphones",
        price: 11999,
        image: jblLive,
        rating: 4.8,

        activeNoiseCancellation: "Yes",
        bluetoothMultipoint: "Yes",
        batteryLife: "Up to 48 hours",
        connectivity: "Bluetooth, USB-C"
    },
    {
        id: 16,
        brand: "Marshall",
        name: "Monitor III ANC",
        category: "Headphones",
        price: 29999,
        image: monitor,
        rating: 4.8,

        activeNoiseCancellation: "Yes",
        bluetoothMultipoint: "Yes",
        batteryLife: "70 hours (ANC)",
        connectivity: "Bluetooth 5.3, 3.5mm"
    },
    {
        id: 17,
        brand: "Sony",
        name: "WF-1000XM5",
        category: "Earbuds",
        price: 24990,
        image: O3M,
        rating: 4.8,

        activeNoiseCancellation: "Yes",
        bluetoothMultipoint: "Yes",
        batteryLife: "Up to 8 hours (ANC)",
        connectivity: "Bluetooth 5.3, USB-C"
    },
    {
        id: 18,
        brand: "Marshall",
        name: "Emberton III",
        category: "Speaker",
        price: 17999,
        image: emberton3,
        rating: 4.8,

        activeNoiseCancellation: "N/A",
        bluetoothMultipoint: "Yes",
        batteryLife: "32+ hours",
        connectivity: "Bluetooth 5.3 LE, USB-C"
    },
]