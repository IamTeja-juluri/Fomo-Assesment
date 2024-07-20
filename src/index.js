const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ServerConfig } = require("./config");
const path = require("path");
const apiRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "*",
  })
);
app.use("/api", apiRoutes);


const startServer = async () => {
  try {
    await mongoose.connect(ServerConfig.MONGO_URI);
    app.listen(ServerConfig.PORT, async () => {
      console.log("Server running on port", ServerConfig.PORT);
    });
   
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
