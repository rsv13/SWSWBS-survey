import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { email, password, ageGroup, gender } = req.body;

  if (
    // !username ||
    !email ||
    !password ||
    !ageGroup ||
    !gender ||
    // username === "" ||
    email === "" ||
    password === "" ||
    ageGroup === "" ||
    gender === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    // username,
    email,
    password: hashPassword,
    ageGroup,
    gender,
  });

  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    next(error);
  }
};
