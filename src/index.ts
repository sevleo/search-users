import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import mongoose from "mongoose";
import { indexRouter } from "./routes/indexRouter";
// import loadTestData from "./scripts/loadTestData";

// Database setup
const mongoDB = process.env["MONGO_DB"];

if (!mongoDB) {
  throw new Error("MONGO_DB is not defined in .env");
}

mongoose.connect(mongoDB, { dbName: "users" });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const app = express();

app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  //   loadTestData(); // Run once to upload test data
});
