import { useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProducts } from "../services/api";
import Hero from "../components/Hero";
import CategorySlider from "../components/CategorySlider";
import ProductCard from "../components/ProductCard";
import Review from "../components/Review";
import { useEffect } from "react";

export default function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // URL parameters ko read karna
  const queryParams = new URLSearchParams(useLocation().search);
  const searchKeyword = queryParams.get("search") || "";
  const categoryParam = queryParams.get("category") || "";

  // 🟢 State Lazy Initialization: Default value seedha URL parameter se uthayenge
  const [activeCategory, setActiveCategory] = useState(() => {
    return categoryParam || "All Products";
  });

  // 🟢 Render Phase Syncing: Agar URL ki category state se alag ho, toh bina useEffect ke state update karein
  // Yeh tareeqa React Compiler ke linter ko mutmayen rakhta hai aur cascading renders se bachata hai.
  const currentExpectedCategory = categoryParam || "All Products";
  if (activeCategory !== currentExpectedCategory) {
    setActiveCategory(currentExpectedCategory);
  }

  // Fetch products from backend on mount
  useEffect(() => {
    const loadProductsData = async () => {
      try {
        setLoading(true);
        const res = await fetchProducts();
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Could not establish connection with backend API engine.");
        setLoading(false);
      }
    };
    loadProductsData();
  }, []);

  // Filter datasets based on dynamic active user inputs
  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "All Products" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchKeyword.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="homepage-root-layout">
      <Hero />
      <CategorySlider activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      <main className="main-catalog-container">
        <div className="section-title-block">
          <h2>
            {searchKeyword ? `SEARCH RESULTS FOR "${searchKeyword.toUpperCase()}"` : `${activeCategory.toUpperCase()}`}
          </h2>
          <p>Displaying premium catalog inventories curated from direct global distribution hubs</p>
          <div className="title-accent-line"></div>
        </div>

        {loading ? (
          <div className="state-message-box"><p>Synchronizing Secure Inventory Databases...</p></div>
        ) : error ? (
          <div className="state-message-box error-color"><p>{error}</p></div>
        ) : filteredProducts.length === 0 ? (
          <div className="state-message-box"><p>No luxury matching records located in current criteria catalog.</p></div>
        ) : (
          <div className="products-showcase-master-grid">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product._id} 
                product={product} 
                addToCart={addToCart} 
              />
            ))}
          </div>
        )}
      </main>

      <Review />
    </div>
  );
}