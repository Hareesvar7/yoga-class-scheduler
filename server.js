const express = require("express");
require('dotenv').config({path: "./config.env"})
const app = express();
const connectDB = require("./configuration/db");
const errorHandler = require("./middleware/error");
const path = require("path");
var cors = require('cors')
connectDB();

app.use(express.static(path.join(process.cwd(), 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;


 

// app.use(express.static(path.join(__dirname, 'build')));

app.use(function (req, res, next) {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
})


const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});