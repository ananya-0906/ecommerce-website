import "./Footer.css";
import Logo from "../../assets/logo.png";
import { FaInstagram,  FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer(){
    return(
        <footer>
            <div className="footer-container">

                <div className="footer-brand">
                    <img src={Logo} />
                    <p>Premium audio marketplace for discovering the world's best headphones, earbuds and speakers.</p>

                    <div className="social-icons">
                        <a href="#"> <FaInstagram /> </a>
                        <a href="#"> <FaXTwitter /> </a>
                        <a href="#"> <FaFacebookF /> </a>
                        <a href="#"> <FaYoutube /> </a>
                    </div>
                </div>

                <div className="footer-links">

                    <h4>Shop</h4>
                    <ul>
                        <li><a href="#">Headphones</a></li>
                        <li><a href="#">Earbuds</a></li>
                        <li><a href="#">Speakers</a></li>
                        <li><a href="#">SoundBars</a></li>
                    </ul>

                </div>
                <div className="footer-links">

                    <h4>Company</h4>
                    <ul>
                        <li><a>About us</a></li>
                        <li><a>Compare</a></li>
                        <li><a>Brands</a></li>
                        <li><a>Blog</a></li>
                    </ul>

                </div>
                <div className="footer-links">

                    <h4>Support</h4>
                    <ul>
                        <li><a>Contact</a></li>
                        <li><a>FAQs</a></li>
                        <li><a>Privacy</a></li>
                        <li><a>Terms</a></li>
                    </ul>

                </div>

            </div>

            <div className="footer-bottom">
                    <p>© 2026 sonicX. All rights reserved.</p>
            </div>
            
        </footer>
    );
}

export default Footer;