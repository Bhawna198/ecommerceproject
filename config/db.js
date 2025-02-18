 // config/db.js
 const { Sequelize } = require('sequelize');

 // Create a new Sequelize instance with your MySQL configuration
 const sequelize = new Sequelize(
   'ecommerce_db',  // replace with your database name
   'root',            // replace with your MySQL username
   'bhawna*19102004',        // replace with your MySQL password
   {
     host: 'localhost',
     dialect: 'mysql',
     logging: false,   // Disable SQL logging in the console (optional)
   }
 );
 
 // Check if the connection is working
 sequelize.authenticate()
   .then(() => {
     console.log("Database connected successfully.");
   })
   .catch(err => {
     console.error("Unable to connect to the database:", err);
   });
 
 module.exports = sequelize;
