const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const sampleProducts = [
  // --- WATCHES (12 Products) ---
  { name: "Seiko Prospex Automatic Diver", brand: "Seiko", originalPrice: 58800, price: 50000, discountBadge: "15% OFF", category: "Watches", rating: 4.8, image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=600&q=80", description: "Authentic mechanical craftsmanship. 200m water resistance, deep green sunray dial." },
  { name: "Tissot Le Locle Powermatic 80", brand: "Tissot", originalPrice: 60000, price: 51000, discountBadge: "15% OFF", category: "Watches", rating: 4.9, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80", description: "Swiss automatic watch featuring an elegant textured black dial and premium stainless steel." },
  { name: "Rado Captain Cook Automatic", brand: "Rado", originalPrice: 70500, price: 59900, discountBadge: "15% OFF", category: "Watches", rating: 5.0, image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=600&q=80", description: "High-tech ceramic bezel with vintage styling. Luxury build for elite collectors." },
  { name: "Pierre Cardin Classic Gold", brand: "Pierre Cardin", originalPrice: 59000, price: 50150, discountBadge: "15% OFF", category: "Watches", rating: 4.4, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80", description: "Sophisticated golden plating dress watch paired with a genuine brown leather strap." },
  { name: "Royal London Executive Chrono", brand: "Royal London", originalPrice: 65000, price: 55250, discountBadge: "15% OFF", category: "Watches", rating: 4.5, image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=600&q=80", description: "British design structural elegance. Complete stopwatch sub-dials and date windows." },
  { name: "Ferro Sport Chronograph Blue", brand: "Ferro", originalPrice: 53000, price: 45050, discountBadge: "15% OFF", category: "Watches", rating: 4.3, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80", description: "Bold dark blue dial matched with an integrated steel bracelet mesh." },
  { name: "Omax Masterpiece Slimline", brand: "Omax", originalPrice: 58500, price: 49725, discountBadge: "15% OFF", category: "Watches", rating: 4.2, image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=600&q=80", description: "Ultra-thin high precision quartz movement watch suited for business wear." },
  { name: "Casio Edifice Sapphire Edition", brand: "Casio", originalPrice: 66000, price: 56100, discountBadge: "15% OFF", category: "Watches", rating: 4.7, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=600&q=80", description: "Scratch-resistant sapphire glass cover with a dark carbon fiber backing structure." },
  { name: "Orient Bambino Version 4", brand: "Orient", originalPrice: 70000, price: 59500, discountBadge: "15% OFF", category: "Watches", rating: 4.8, image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=600&q=80", description: "Classic domed crystal look automatic mechanical engine with stunning sunburst finish." },
  { name: "Claude Bernard Swiss Classic", brand: "Claude Bernard", originalPrice: 62000, price: 52700, discountBadge: "15% OFF", category: "Watches", rating: 4.6, image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=600&q=80", description: "Handcrafted Swiss masterpiece. High grade silver dial accented with golden luxury links." },
  { name: "Mathey-Tissot Vintage Diver", brand: "Mathey-Tissot", originalPrice: 68000, price: 57800, discountBadge: "15% OFF", category: "Watches", rating: 4.8, image: "https://images.unsplash.com/photo-1629581678313-36cf745a9af9?auto=format&fit=crop&w=600&q=80", description: "Retro layout design, rotating black tracking bezel, and deep blue ocean dial aesthetics." },
  { name: "Luxury Minimalist Dress Watch", brand: "Generic", originalPrice: 65000, price: 55250, discountBadge: "15% OFF", category: "Watches", rating: 4.5, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80", description: "Clean aesthetic design perfect for professional environments and formal occasions." },

  // --- LAPTOPS & TECH (12 Products) ---
  { name: "MacBook Pro M3 Max Pro", brand: "Apple", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.9, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", description: "16-inch Liquid Retina XDR display, 36GB unified memory, ultimate developer machine." },
  { name: "Dell XPS 13 Ultra Thin", brand: "Dell", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.6, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80", description: "Intel Core Ultra 7 processor, borderless infinity edge layout panel." },
  { name: "HP Spectre x360 Convertible", brand: "HP", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.7, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80", description: "2-in-1 touchscreen flip versatility, 4K OLED display presentation, stylus pen included." },
  { name: "Lenovo Legion Pro 7i Gaming", brand: "Lenovo", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.9, image: "https://images.unsplash.com/photo-1603302576837-37561b2fe536?auto=format&fit=crop&w=600&q=80", description: "RTX 4080 graphics setup, 240Hz competitive display rate, optimized thermal cooling airflow." },
  { name: "Asus ROG Zephyrus G14", brand: "Asus", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.8, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80", description: "AMD Ryzen 9 processor core engine wrapped inside an ultra slim gaming chassis body." },
  { name: "Acer Predator Helios Neo", brand: "Acer", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.5, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80", description: "High tier Core i7 architecture paired with an immersive 165Hz response screen array." },
  { name: "Microsoft Surface Laptop 6", brand: "Microsoft", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.6, image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", description: "Sleek Alcantara deck keyboard finish with responsive pixel sense touch resolution." },
  { name: "Razer Blade 15 Creator Edition", brand: "Razer", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.8, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80", description: "Precision CNC aluminum milling, factory calibrated display spectrum targets for artists." },
  { name: "MSI Stealth Studio Thin", brand: "MSI", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.7, image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80", description: "Lightweight premium performance engineering made for clean office or gaming crossover environments." },
  { name: "Samsung Galaxy Book4 Ultra", brand: "Samsung", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.8, image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80", description: "Dynamic AMOLED 2X touch matrix surface displaying flawless phone eco-system linkage tabs." },
  { name: "ThinkPad X1 Carbon Gen 12", brand: "Lenovo", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.7, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80", description: "Legendary aerospace carbon weave durability configuration with ultra secure privacy logs." },
  { name: "Gigabyte Aorus Professional", brand: "Gigabyte", originalPrice: 141176, price: 120000, discountBadge: "15% OFF", category: "Laptops", rating: 4.4, image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=600&q=80", description: "High speed screen refreshing frame loops optimized for extreme processing loads." }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Seed Connection Active...");
    await Product.deleteMany({});
    console.log("Old Products Dropped Cleanly.");
    await Product.insertMany(sampleProducts);
    console.log("Successfully seeded 24 Luxury Products into MongoDB! 🚀");
    process.exit(0);
  } catch (error) {
    console.error(`Seeding error failed: ${error.message}`);
    process.exit(1);
  }
};
seedDatabase();