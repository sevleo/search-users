import asyncHandler from "express-async-handler";
import User from "../models/user";

const getUser = asyncHandler(async (req, res) => {
  const { email, number } = req.query;

  if (!email) {
    res.status(400).json({ error: "Email is missing" });
  }

  // Find users that match both the email and the phone number
  if (email && number) {
    const users = await User.find({
      email: email,
      number: number,
    });
    res.status(200).json({ success: users });
  }

  // Find users that match the email
  if (email && !number) {
    const users = await User.find({
      email: email,
    });
    res.status(200).json({ success: users });
  }
});

export default {
  getUser,
};
