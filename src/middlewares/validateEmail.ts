import asyncHandler from "express-async-handler";
import { Request, NextFunction } from "express";

// Regex for basic email format validation
const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmailFormat = asyncHandler(
  async (req: Request, res: any, next: NextFunction) => {
    const { email } = req.query;

    if (!emailValidator.test(email as any)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    next();
  }
);

export const validateEmailNotEmpty = asyncHandler(
  async (req: Request, res: any, next: NextFunction) => {
    const { email } = req.query;

    if (!email) {
      res.status(400).json({ error: "Email is missing" });
    }

    next();
  }
);
