import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password, ageGroup, gender } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !ageGroup ||
    !gender ||
    username === "" ||
    email === "" ||
    password === "" ||
    ageGroup === "" ||
    gender === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password : hashPassword,
    ageGroup,
    gender,
  });

  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
