import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaShieldAlt, FaTruck, FaUndo, FaHeadset } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="master-footer-architecture">
      {/* Trust Badges Bar Row */}
      <div className="footer-trust-badges-ribbon">
        <div className="trust-badge-item">
          <FaTruck className="badge-icon" />
          <div><h4>FREE METRO DISPATCH</h4><p>Fast track secure logistics delivery</p></div>
        </div>
        <div className="trust-badge-item">
          <FaShieldAlt className="badge-icon" />
          <div><h4>100% SECURE ASSETS</h4><p>Fully verifiable serial certificates</p></div>
        </div>
        <div className="trust-badge-item">
          <FaUndo className="badge-icon" />
          <div><h4>7 DAYS EXCHANGE</h4><p>Hassle-free dynamic returns policy</p></div>
        </div>
        <div className="trust-badge-item">
          <FaHeadset className="badge-icon" />
          <div><h4>24/7 DEDICATED LINES</h4><p>Professional post purchase customer desk</p></div>
        </div>
      </div>

      {/* Main Multi Column Grid Layout */}
      <div className="footer-main-columns-grid">
        <div className="footer-identity-column">
          <h2 className="footer-brand-logo">SMARTCOMMERCE</h2>
          <p className="brand-pitch-text">Pakistan's absolute digital benchmark for authentic luxury watches and performance laptop computers. Delivering unmatched retail perfection.</p>
          <div className="footer-contact-details-list">
            <p><FaMapMarkerAlt /> Freed Town Sahiwal, Main Commercial Hub, Pakistan</p>
            <p><FaPhoneAlt /> +92 (300) 0000000</p>
            <p><FaEnvelope /> syedzaheershah@smartcommerce.com</p>
            
          </div>
        </div>

        <div className="footer-links-column">
          <h3>INFORMATION</h3>
          <ul>
            <li><Link to="/about">About Our Heritage</Link></li>
            <li><Link to="/">Latest Collections Catalog</Link></li>
            <li><Link to="/contact">Corporate Order Enquiries</Link></li>
            <li><Link to="/">Secure Payments Portal</Link></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h3>CUSTOMER SUPPORT</h3>
          <ul>
            <li><Link to="/contact">Track Consignment Status</Link></li>
            <li><Link to="/about">Warranty Claim Directories</Link></li>
            <li><Link to="/contact">Privacy Guidelines Policy</Link></li>
            <li><Link to="/contact">Terms & Core Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-gateways-column">
          <h3>ACCEPTED PAYMENT CHANNELS</h3>
          <p>We process standard financial transactions through audited clear networks.</p>
          <div className="payment-gateway-logos-flex">
            <span className="gateway-badge">Visa</span>
            <span className="gateway-badge">MasterCard</span>
            <span className="gateway-badge">EasyPaisa</span>
            <span className="gateway-badge">JazzCash</span>
            <span className="gateway-badge">Bank Transfer</span>
          </div>
        </div>
      </div>

      <div className="footer-copyright-bottom-strip">
        <p>© 2026 SmartCommerce Corporation Ltd. Engineered for Absolute Perfection. All Rights Reserved.</p>
      </div>
    </footer>
  );
}