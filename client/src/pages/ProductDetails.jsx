import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../services/api";
import { FaShieldAlt, FaTruck, FaClock, FaCheckCircle } from "react-icons/fa";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        setLoading(true);
        const res = await fetchProductById(id);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Requested item information is unavailable or database timed out.");
        setLoading(false);
      }
    };
    getSingleProduct();
  }, [id]);

  if (loading) return <div className="state-message-box"><p>Loading Product Specifications Blueprint...</p></div>;
  if (error || !product) return <div className="state-message-box error-color"><p>{error || "Product records absent."}</p></div>;

  const savings = product.originalPrice - product.price;

  return (
    <div className="details-page-root">
      <div className="breadcrumb-trail-nav">
        <Link to="/">HOME</Link> / <Link to={`/?category=${product.category}`}>{product.category.toUpperCase()}</Link> / {product.name.toUpperCase()}
      </div>

      <div className="details-two-column-layout">
        {/* Left Interactive Media Column */}
        <div className="details-media-showcase">
          {product.discountBadge && <span className="details-image-discount-badge">{product.discountBadge}</span>}
          <img src={product.image} alt={product.name} />
        </div>

        {/* Right Structured Information Column */}
        <div className="details-info-specification">
          <span className="details-brand-pill">{product.brand.toUpperCase()}</span>
          <h1>{product.name}</h1>
          <div className="details-rating-row">{"★".repeat(Math.round(product.rating))} <span>({product.rating} user score evaluation)</span></div>
          
          <div className="details-pricing-panel">
            <span className="details-original-price">Rs {product.originalPrice.toLocaleString()}</span>
            <span className="details-active-price">Rs {product.price.toLocaleString()}</span>
            {savings > 0 && <span className="details-savings-tag">Instant Markdown Saving: Rs {savings.toLocaleString()}</span>}
          </div>

          <div className="stock-status-indicator">
            <FaCheckCircle className="instock-icon" /> Genuine Stock Allocation Secure & Verified (100% Authentic)
          </div>

          <p className="product-extended-description">{product.description}</p>

          <div className="details-action-box">
            <button className="details-add-to-cart-master-btn" onClick={() => addToCart(product)}>
              ADD TO REVENUE CART CHECKOUT
            </button>
          </div>

          <div className="product-guarantee-bullets-box">
            <div className="bullet-point"><FaTruck /> <span><strong>Metropolitan Express:</strong> Same or Next Business Day Delivery Service.</span></div>
            <div className="bullet-point"><FaShieldAlt /> <span><strong>Official Coverage:</strong> Fully backed comprehensive international warranty protocols.</span></div>
            <div className="bullet-point"><FaClock /> <span><strong>Secured Logistics:</strong> Inspection options allowed inside courier verification parcels.</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}