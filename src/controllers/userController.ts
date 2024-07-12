import asyncHandler from "express-async-handler";
import User from "../models/user";

const getUser = asyncHandler(async (req, res) => {
  console.log(req);
  console.log(res);
  res.status(200).json({ success: true });
});

export default {
  getUser,
};
