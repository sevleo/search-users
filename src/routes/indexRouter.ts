import userController from "../controllers/userController";
import express from "express";
// import requestCanceller from "../middlewares/requestCanceller";
import {
  validateEmailFormat,
  validateEmailNotEmpty,
} from "../middlewares/validateEmail";
import { simulateDelay } from "../middlewares/simulateDelay";

const router = express.Router();

router.get(
  "/get-user",
  validateEmailNotEmpty,
  validateEmailFormat,
  simulateDelay,
  userController.getUser
);

export { router as indexRouter };
