import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

import galleryRouter from "./routes/api/gallery-router.js";
import productRouter from "./routes/api/product-router.js";
import contsctRouter from "./routes/api/contact-router.js";
import orderRouter from "./routes/api/order-router.js";
import subscribeRouter from "./routes/api/subscribe-router.js";

const app = express();
// const allowedOrigins = [
//   "https://angry-beaver-lodge.vercel.app",
//   "http://localhost:3000/",
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Angry Beaver Lodge!");
});

app.use("/api/gallery", galleryRouter);
app.use("/api/products", productRouter);
app.use("/api/contacts", contsctRouter);
app.use("/api/orders", orderRouter);
app.use("/api/subscribe", subscribeRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
