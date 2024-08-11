import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

import galleryRouter from "./routes/api/gallery-router.js";
import productRouter from "./routes/api/product-router.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

app.use("/api/gallery", galleryRouter);
app.use("/api/products", productRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
