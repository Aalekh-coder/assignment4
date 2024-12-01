import User from "../Models/userModels.js";
import asyncHandler from "../Middleware/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../Utils/createToken.js";

export const createUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, dob, phone } = req.body;

  if (!fullName || !email || !password || !dob || !phone) {
    throw new Error("Please fill all the fields");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).send("User already existing");
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    fullName,
    email,
    password: hashedPassword,
    dob,
    phone,
  });

  try {
    await newUser.save();
    createToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      password: newUser.password,
      dob: newUser.dob,
      phone: newUser.phone,
    });
  } catch (error) {
    res.status(400);
    console.log(error)
    throw new Error("Invaild user data");
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const {email,password} = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const isPasswordVaild = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (isPasswordVaild) {
      createToken(res, existingUser._id);

      res.status(201).json({
        _id: existingUser._id,
        fullName: existingUser.fullName,
        email: existingUser.email,
        password: existingUser.password,
        dob: existingUser.dob,
        phone: existingUser.phone,
      });
        return
    }
  }
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logout Successfully" });
})
