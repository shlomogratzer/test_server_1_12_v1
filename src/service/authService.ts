import { Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/users";

const loginUser = async (email: string, password: string) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) throw new Error("Incorrect password or email");

    return user;
  } catch (error) {
    throw new Error("Failed to login");
  }
};
const logoutUser = (res: Response): void => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
  } catch (error) {
    console.log(error);
  }
};
export { loginUser, logoutUser };
