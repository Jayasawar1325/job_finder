/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
const generateAccessToken = async (userId) => {
  try {
    return jwt.sign(
      {
        _id: userId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access token"
    );
  }
};
const signUp = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if ([username, email, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "User with same email address already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  const token = await generateAccessToken(newUser._id);
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  };
  return res.status(200).cookie("token", token, options).json({
    message: "User signed up successfully",
    data: newUser
  });
});
const signIn = asyncHandler(async (req, res) => {
    const {email,password} = req.body;
    if (!password && !email) {
        throw new ApiError(400, "password or email is required")
    }
    const existingUser = await User.findOne({email})
    if(!existingUser){
        throw new ApiError(404, "User does not exist")
    }
    const isPasswordValid = await bcrypt.compare(password,existingUser.password)
    if(!isPasswordValid){
        throw new ApiError(400,'Password is not valid')
    }
    const token = await generateAccessToken(existingUser._id)
const loggedUser = await User.findById(existingUser._id).select('-password')
const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  };
  return res.status(200).cookie("token",token, options).json({
    message: "User signed in successfully",
    data: loggedUser
  });
});
const signOut = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(req.body._id || req.user._id, {
        $unset: {
            token: 1
        }
    }, {
        new: true
    });
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
    };
    return res.status(200)
        .clearCookie('token', options)
        .json({
            message: 'User signed out successfully'
        });
});
const adminLogin = asyncHandler(async (req, res) => {
    const {email,password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign({email},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES_IN
        })
        res.status(200).json({
          message: 'Admin logged in successfully',
          success: true,
           token
        });
    }
  
});
export { signIn, signOut, signUp, adminLogin };
