import { FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

export default function Review() {
  const verifiedReviewsList = [
    { name: "Ali Muhammad", initial: "A", review: "Outstanding premium quality watches! Purchased a Seiko Prospex automatic, delivery inside Lahore took just 24 hours. Serial verification checked out perfect.", stars: 5 },
    { name: "Ahmed Raza", initial: "A", review: "Highly recommended store. The customer service representative guided me properly on the phone regarding laptop specs before dispatching my Asus ROG machine. 10/10.", stars: 5 },
    { name: "Sara Khan", initial: "S", review: "Genuine high-end electronics shop. The package arrived with official warranty cards, fully sealed product, and exceptionally secured double bubble wrapping.", stars: 5 },
    { name: "Usman Sheikh", initial: "U", review: "Superb experience overall. Transparent pricing structures and legitimate discounts compared to retail markets. Will order again definitely.", stars: 5 }
  ];

  return (
    <section className="customer-reviews-showcase">
      <div className="section-title-block">
        <h2>GOOGLE CUSTOMER REVIEWS</h2>
        <div className="title-accent-line"></div>
      </div>
      <div className="reviews-carousel-grid">
        {verifiedReviewsList.map((item, index) => (
          <div className="premium-review-card" key={index}>
            <div className="review-card-top-row">
              <div className="customer-badge-avatar">{item.initial}</div>
              <div>
                <h4>{item.name}</h4>
                <div className="verified-purchaser-pill">
                  <FaCheckCircle /> Verified Purchase
                </div>
              </div>
            </div>
            <div className="review-stars-row">{"★".repeat(item.stars)}</div>
            <p className="review-text-message">
              <FaQuoteLeft className="quote-mark-icon" /> {item.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}