import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

function Navbar(){
    return(
        <header className="site-header">
            <nav className="navbar"> 

                <ul className="nav-links">
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/compare">COMPARE</Link></li>
                    <li><Link to="/">ABOUT</Link></li>
                </ul>

                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo-img" />
                    </Link>
                </div>
                
                <div className="right-side">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search"
                        />

                        <button className="search-btn">
                            <Search size={22} />
                        </button>
                    </div>

                    <div className="nav-icons">
                        <Link to="/auth" className="icon-btn">
                            <User size={24} />
                        </Link>

                        <Link to="/wishlist" className="icon-btn">
                            <Heart size={24} />
                        </Link>

                        <Link to="/cart" className="icon-btn nav-cart-btn">
                            <ShoppingCart size={24} />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;