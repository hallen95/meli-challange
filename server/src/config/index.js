import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 8080,
  apiBaseUrl: process.env.API_BASE_URL || "https://api.mercadolibre.com",
  environment: process.env.NODE_ENV || "development",
};

export default config;
