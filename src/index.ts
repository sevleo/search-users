import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { indexRouter } from "./routes/indexRouter";
// import loadTestData from "./scripts/loadTestData";

// MongoDB setup
const mongoDB = process.env["MONGO_DB"];

if (!mongoDB) {
  throw new Error("MONGO_DB is not defined in .env");
}

mongoose.connect(mongoDB, { dbName: "users" });
const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connection established successfully");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.set("trust proxy", true);

app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  //   loadTestData(); // Run once to upload test data
});
