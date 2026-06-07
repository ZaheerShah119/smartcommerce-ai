export default function CategorySlider({ activeCategory, setActiveCategory }) {
  const categoriesList = [
    { name: "All Products", label: "ALL COLLECTIONS", icon: "💎" },
    { name: "Watches", label: "PREMIUM WATCHES", icon: "⌚" },
    { name: "Laptops", label: "HIGH-END LAPTOPS", icon: "💻" }
  ];

  return (
    <section className="category-filter-section">
      <div className="section-title-block">
        <h2>SHOP BY CATEGORY</h2>
        <div className="title-accent-line"></div>
      </div>
      <div className="category-circular-grid">
        {categoriesList.map((cat, index) => (
          <div 
            key={index} 
            className={`category-circular-card ${activeCategory === cat.name ? "selected-cat" : ""}`}
            onClick={() => setActiveCategory(cat.name)}
          >
            <div className="cat-icon-avatar">{cat.icon}</div>
            <h3>{cat.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}