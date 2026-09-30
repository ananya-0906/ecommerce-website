import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Compare from "./pages/Compare";
import Auth from "./pages/Auth";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/compare" element={<Compare />} />

      <Route path="/auth" element={<Auth />} />

      <Route path="/cart" element={<Cart />} />
      
      <Route path="/wishlist" element={<Wishlist />} />

    </Routes>
  );
}

export default App;
