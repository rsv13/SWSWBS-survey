import mongoose from "mongoose";
import Counter from "./counter.model.js";

// User Schema and Model
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "Prefer not to say"],
    },
    ageGroup: {
      type: String,
      required: true,
      enum: ["16 to 24", "25 to 34", "35 to 44", "45 to 54", "54 and above"],
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
  },
  { timestamps: true }
);

// Pre-save hook to generate the username
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isNew) {
    return next();
  }

  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "usernameCounter" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    user.username = `SWSWBS${counter.count}`;
    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model("User", userSchema);

export default User;
