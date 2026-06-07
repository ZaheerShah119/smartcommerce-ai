const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Middleware Setup
app.use(cors());
app.use(express.json());

// Establish Database Connection
connectDB();

// API Endpoint Wireframes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Master Root Base Checking
app.get("/", (req, res) => {
  res.send("SmartCommerce Production Backend Engine Status: Online 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server executing cleanly on Port: ${PORT}`);
});