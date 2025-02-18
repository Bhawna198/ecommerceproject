const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/db");

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Import Routes
const countryRoutes = require("./routes/countryRoutes");

// Use Routes
app.use("/api/countries", countryRoutes);

// Sync Database
sequelize.sync({ force: false }).then(() => {
  console.log("✅ Database & tables synced!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
