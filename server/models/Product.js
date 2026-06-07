const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    price: { type: Number, required: true }, // Discounted Active Price
    discountBadge: { type: String, default: "" }, // e.g., "15% OFF"
    image: { type: String, required: true },
    category: { type: String, required: true }, // "Watches" or "Laptops"
    rating: { type: Number, default: 4.5 },
    description: { type: String, default: "Premium authentic product with official warranty." },
    stock: { type: Number, default: 10 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);