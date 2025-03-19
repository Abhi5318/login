const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Allow JSON data

// Dummy users (Replace with real database later)
app.get("/api", (req, res) => {
  res.send("API is working!");
});
const users = [
  { email: "admin@gmail.com", password: "password123" },
  { email: "user@gmail.com", password: "user123" },
];

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, message: "Login successful!" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Start the backend on port 3000
app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
