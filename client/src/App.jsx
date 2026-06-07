import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  // 🟢 State Lazy Initialization: Startup par hi localStorage se data read kar lega
  // Is se useEffect mein synchronously setState call karne ka error hamesha ke liye solve ho jayega.
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("smart_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync cart data to localStorage
  const saveCartToStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("smart_cart", JSON.stringify(updatedCart));
  };

  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);
    if (exist) {
      const updated = cart.map((item) =>
        item._id === product._id ? { ...exist, qty: exist.qty + 1 } : item
      );
      saveCartToStorage(updated);
    } else {
      const updated = [...cart, { ...product, qty: 1 }];
      saveCartToStorage(updated);
    }
  };

  const removeFromCart = (productId) => {
    const updated = cart.filter((item) => item._id !== productId);
    saveCartToStorage(updated);
  };

  const updateQty = (productId, amount) => {
    const updated = cart.map((item) => {
      if (item._id === productId) {
        const newQty = item.qty + amount;
        return { ...item, qty: newQty < 1 ? 1 : newQty };
      }
      return item;
    });
    saveCartToStorage(updated);
  };

  const clearCart = () => {
    saveCartToStorage([]);
  };

  // Calculate dynamic cart item counter total
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart} 
              updateQty={updateQty} 
              clearCart={clearCart} 
            />
          } 
        />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}