import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitAction = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="informative-page-layout">
      <div className="contact-structural-grid-wrapper">
        <div className="contact-form-container-card">
          <h2>DIRECT COMMUNICATIONS HUB</h2>
          <p>Submit a formal operations inquiry log below for rapid ticket routing feedback.</p>
          <div className="title-accent-line"></div>

          {submitted && (
            <div className="form-success-alert-message">
              ✓ Communications signal received successfully! Operation support agents will interface within 12 standard banking hours.
            </div>
          )}

          <form onSubmit={handleSubmitAction} className="contact-master-form-element">
            <div className="form-input-group-row">
              <input 
                type="text" 
                placeholder="Full Registered Name *" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input 
                type="email" 
                placeholder="Email Address Endpoint *" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject Context Matrix" 
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            <textarea 
              placeholder="Detailed Message logs outlining technical requirements or transactional assistance needed... *" 
              rows="6" 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button type="submit" className="form-dispatch-action-btn">TRANSMIT DIRECT INQUIRY TICKET</button>
          </form>
        </div>

        <div className="contact-info-sidebar-panel">
          <h3>CENTRAL PLAZA OUTLET HQ</h3>
          <p className="hq-subtext">Visit our physical premium display centers for direct luxury viewing audits.</p>
          <div className="hq-detail-block">
            <h4>📍 KARACHI MASTER DISPLAY CORNER</h4>
            <p>Ground Floor, Premium Watch Galleria Sector, Main Commercial Boulevard, Karachi, Pakistan.</p>
          </div>
          <div className="hq-detail-block">
            <h4>📍 LAHORE CORPORATE DISTRIBUTION DESK</h4>
            <p>Level 2, High-End Tech Corporate Center Towers, Gulberg Circuit, Lahore, Pakistan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}