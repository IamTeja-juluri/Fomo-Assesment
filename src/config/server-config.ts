import dotenv from "dotenv";
dotenv.config();

interface envProperties {
  PORT: string;
  MONGO_URI: string;
  API_KEY: string;
}

const ServerConfig: envProperties = {
  PORT: process.env.PORT || "3000",
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/mydb",
  API_KEY: process.env.API_KEY || "1234567890",
};

export default ServerConfig;
