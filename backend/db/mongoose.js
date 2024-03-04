const mongoose = require("mongoose"); // use to connect the database

const url = "";

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected successfully");
});
