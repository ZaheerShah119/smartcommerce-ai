import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart, FaSearch, FaUser, FaRegHeart } from "react-icons/fa";

export default function Navbar({ cartCount }) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/?search=${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="master-navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          SMARTCOMMERCE
        </Link>

        <ul className="nav-menu-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/?category=Watches">MEN'S WATCHES</Link></li>
          <li><Link to="/?category=Laptops">LAPTOPS & TECH</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        <div className="nav-actions-right">
          <form className="nav-search-bar" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search premium products..." 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit"><FaSearch /></button>
          </form>

          <div className="nav-utility-icons">
            <FaUser className="util-icon" title="Profile Log" />
            <FaRegHeart className="util-icon" title="Wishlist" />
            <Link to="/cart" className="nav-cart-trigger">
              <FaShoppingCart className="util-icon-cart" />
              {cartCount > 0 && <span className="cart-badge-counter">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}