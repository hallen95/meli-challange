import express from "express";
import cors from "cors";
import itemsRoutes from "./routes/itemsRoutes.js";

const app = express();
app.use(express.json());

//cors setup
app.use(
  cors({
    origin: process.env.API_CORS_ACCESS_ALLOW,
  })
);

// Routes
app.use("/api/items", itemsRoutes);

// general error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

export default app;
