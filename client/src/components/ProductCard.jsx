import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  // Calculate savings amount for dynamic calculation display
  const savedAmount = product.originalPrice - product.price;

  return (
    <div className="premium-product-card">
      {product.discountBadge && (
        <span className="product-card-discount-badge">
          {product.discountBadge}
        </span>
      )}
      
      <div className="product-card-image-wrapper">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-card-hover-actions">
          <button className="hover-action-btn-cart" onClick={() => addToCart(product)}>
            ADD TO CART
          </button>
          <Link to={`/product/${product._id}`} className="hover-action-btn-view">
            QUICK VIEW
          </Link>
        </div>
      </div>

      <div className="product-card-details-info">
        <span className="product-card-brand-label">{product.brand.toUpperCase()}</span>
        <h3 className="product-card-title">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h3>
        <div className="product-card-rating-stars">{"★".repeat(Math.round(product.rating))}<span>({product.rating})</span></div>
        
        <div className="product-card-pricing-block">
          <span className="original-striked-price">Rs {product.originalPrice.toLocaleString()}</span>
          <span className="active-discounted-price">Rs {product.price.toLocaleString()}</span>
        </div>
        
        {savedAmount > 0 && (
          <span className="product-card-savings-helper">
            You Save: Rs {savedAmount.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}