import User from "../models/User.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

// get all users from MDB
export const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find().select("-password").lean();

  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
});

// create a new user
export const createUser = asyncHandler(async (req, res, next) => {
  const { username, password, admin } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are requried!" });
  }

  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate username" });
  }

  const hasedPass = await bcrypt.hash(password, 10);

  const userObj = { username, password: hasedPass, admin };

  const user = await User.create(userObj);

  if (user) {
    res.status(200).json({ message: `A new User:${username} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

// update a user
export const updateUser = asyncHandler(async (req, res) => {
  const { id, username, admin, password } = req.body;

  // Confirm data
  if (!id || !username || typeof admin !== "boolean") {
    return res
      .status(400)
      .json({ message: "All fields except password are required" });
  }

  // Does the user exist to update?
  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  // Check for duplicate
  const duplicate = await User.findOne({ username }).lean().exec();

  // Allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate username" });
  }

  user.username = username;
  user.admin = admin;

  if (password) {
    // Hash password
    user.password = await bcrypt.hash(password, 10); // salt rounds
  }

  const updatedUser = await user.save();

  res.json({ message: `${updatedUser.username} updated` });
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "User ID Required" });
  }

  // Does the user exist to delete?
  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const result = await user.deleteOne();

  const reply = `Username ${result.username} with ID ${result._id} deleted`;

  res.json(reply);
});
