import userController from "../controllers/userController";
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/get-user", requestCanceller, userController.getUser);

export { router as indexRouter };
