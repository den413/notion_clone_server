const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5050;
require("dotenv").config();
const cors = require("cors");

app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "https://notion-clone-client-pink.vercel.app",
  })
);
app.use(express.json());
app.use("/api/v1", require("../src/v1/routes"));

//DB接続
try {
  mongoose.connect(process.env.MONGODB_URL);
  // mongoose.connect(process.env.VERCEL_MONGODB_URL);
  console.log("DBと接続中。。。");
} catch (error) {
  console.log("error");
}

app.get("/", (req, res) => {
  res.send("Express Server");
});

app.listen(PORT, () => {
  console.log("起動中");
});
