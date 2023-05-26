import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const port = process.env.PORT || 5002;

//route
app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(port, () => {
  console.log("server is running");
});
