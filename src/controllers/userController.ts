import asyncHandler from "express-async-handler";
import User from "../models/user";
import { Request } from "express";

const getUser = asyncHandler(async (req: Request, res: any) => {
  const { email, number } = req.query;

  // Find users that match both the email and the phone number
  if (email && number) {
    const users = await User.find({
      email: email,
      number: number,
    });
    if (users.length > 0) {
      res.status(200).json({ data: users });
    } else {
      res.status(400).json("No users matching the criteria");
    }
  }

  // Find users that match the email
  if (email && !number) {
    const users = await User.find({
      email: email,
    });
    if (users.length > 0) {
      res.status(200).json({ data: users });
    } else {
      res.status(400).json("No users matching the criteria");
    }
  }
});

export default {
  getUser,
};
