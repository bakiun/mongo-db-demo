require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./src/routes");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/", routes);

app.use((req, res) => {
  res.status(404).json({ error: "Error 404, Not found!" });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error });
});

app.listen(process.env.PORT, async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
  console.log(`Listening on ${process.env.PORT}`);
});
