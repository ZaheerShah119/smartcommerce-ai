import { Link } from "react-router-dom";
import { FaTrashAlt, FaShoppingBag, FaArrowLeft, FaCheck } from "react-icons/fa";
import { useState } from "react";

export default function Cart({ cart, removeFromCart, updateQty, clearCart }) {
  const [checkedOut, setCheckedOut] = useState(false);

  // Math metrics for summary panel evaluations
  const itemsTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const trackingShippingFee = itemsTotal > 150000 ? 0 : 1500;
  const netInvoiceAmount = itemsTotal + trackingShippingFee;

  const handleSimulatedCheckout = () => {
    if (cart.length === 0) return;
    setCheckedOut(true);
    setTimeout(() => {
      clearCart();
    }, 4000);
  };

  if (checkedOut) {
    return (
      <div className="checkout-success-state-container">
        <div className="success-card-panel">
          <div className="success-icon-ring"><FaCheck /></div>
          <h2>TRANSACTION INVOICE ALLOCATED</h2>
          <p>Your order sequence tracking profile has successfully synced with our central logistics hub database.</p>
          <p className="sub-note">A confirmation call will dispatch shortly from our verification department desk. Thank you for choosing SmartCommerce.</p>
          <Link to="/" className="success-return-btn" onClick={() => setCheckedOut(false)}>RETURN TO HUB CATALOG</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-root">
      <div className="section-title-block left-aligned">
        <h2>SHOPPING CHECKOUT CART</h2>
        <div className="title-accent-line"></div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-state-view">
          <FaShoppingBag className="empty-bag-icon" />
          <h3>Your compilation checkout queue is currently clear</h3>
          <p>No premium watches or performance hardware assets listed for current purchase routing paths.</p>
          <Link to="/" className="empty-cart-shop-now-btn"><FaArrowLeft /> DISPATCH CATALOG CHANNELS</Link>
        </div>
      ) : (
        <div className="cart-split-layout-grid">
          {/* Left Table Queue Array */}
          <div className="cart-items-queue-panel">
            <div className="queue-bulk-header-actions">
              <span>Dynamic Queue Items ({cart.length})</span>
              <button className="clear-queue-anchor-btn" onClick={clearCart}>FLUSH ALL ACCUMULATIONS</button>
            </div>

            {cart.map((item) => (
              <div className="cart-queue-row-item" key={item._id}>
                <img src={item.image} alt={item.name} className="queue-item-thumbnail" />
                
                <div className="queue-item-identity-core">
                  <span className="queue-item-brand">{item.brand.toUpperCase()}</span>
                  <h4><Link to={`/product/${item._id}`}>{item.name}</Link></h4>
                  <p className="unit-price-helper">Unit Price: Rs {item.price.toLocaleString()}</p>
                </div>

                <div className="queue-quantity-adjustment-widget">
                  <button onClick={() => updateQty(item._id, -1)}>-</button>
                  <span className="quantity-counter-display-box">{item.qty}</span>
                  <button onClick={() => updateQty(item._id, 1)}>+</button>
                </div>

                <div className="queue-row-total-pricing">
                  <p>Rs {(item.price * item.qty).toLocaleString()}</p>
                </div>

                <button className="queue-item-delete-trigger-btn" onClick={() => removeFromCart(item._id)} title="Delete Item">
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>

          {/* Right Summary Invoice Checkout Block Panel */}
          <div className="cart-invoice-summary-sidebar">
            <div className="invoice-sticky-card-panel">
              <h3>ORDER SUMMARY MATRIX</h3>
              <div className="invoice-metric-row"><span>Gross Subtotal Items:</span><strong>Rs {itemsTotal.toLocaleString()}</strong></div>
              <div className="invoice-metric-row"><span>Logistics Transit Insurance:</span><strong>{trackingShippingFee === 0 ? "FREE" : `Rs ${trackingShippingFee.toLocaleString()}`}</strong></div>
              <div className="invoice-divider-line"></div>
              <div className="invoice-metric-row final-total"><span>Net Payable Balance:</span><strong>Rs {netInvoiceAmount.toLocaleString()}</strong></div>
              
              <div className="invoice-perks-protection-box">
                <p>🛡️ Real-time encrypted invoice checkout routing protection rules applied.</p>
              </div>

              <button className="invoice-checkout-execution-btn" onClick={handleSimulatedCheckout}>
                PROCEED TO DISPATCH SIGNATURE
              </button>

              <Link to="/" className="invoice-continue-shopping-anchor-btn">
                <FaArrowLeft /> CONTINUE CAPTURING COLLECTIONS
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}