import axios from "axios";

// Creating a global optimized Axios instance for backend routing
const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🟢 PRODUCT API CALLS
// Fetch all products from MongoDB data seed
export const fetchProducts = () => API.get("/products");

// Fetch a single product full details using its specific Object ID
export const fetchProductById = (id) => API.get(`/products/${id}`);

// 🟢 USER/AUTH API CALLS (For Future Integration)
// Register a new user profile
export const registerUser = (userData) => API.post("/users/register", userData);

// Login existing user and handle authorization token
export const loginUser = (credentials) => API.post("/users/login", credentials);

export default API;