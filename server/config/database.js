const mongoose = require("mongoose");

const database = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB Connected...");
      })
      .catch((error) => {
        console.log("Error connecting to MongoDB", error);
      });
  } catch (error) {
    console.error("An error occurred in the database function:", error);
  }
};

module.exports = database;
