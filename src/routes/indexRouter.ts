import userController from "../controllers/userController";
import express from "express";
// import requestCanceller from "../middlewares/requestCanceller";
import { Request, Response, NextFunction } from "express";
import {
  validateEmailFormat,
  validateEmailNotEmpty,
} from "../middlewares/validateEmail";

const router = express.Router();

function simulateDelay(req: Request, res: Response, next: NextFunction) {
  setTimeout(next, 5000); // 5000 milliseconds delay (5 seconds)
}

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// router.get("/get-user", requestCanceller, userController.getUser);
router.get(
  "/get-user",
  validateEmailNotEmpty,
  validateEmailFormat,
  simulateDelay,
  userController.getUser
);

export { router as indexRouter };
