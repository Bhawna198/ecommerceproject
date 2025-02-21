require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db"); // Import Sequelize instance

// Import Routes
const auth = require("./routes/auth");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth" , auth);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payments", paymentRoutes);

// Sync Models and Start Server
sequelize.sync({ force: false }) // Set to true to drop and recreate tables on restart
    .then(() => {
        console.log("✅ Database & tables created!");

        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Database Sync Error:", err);
    });
