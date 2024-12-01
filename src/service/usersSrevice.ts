import User, { IUser } from "../models/users";

interface userDTO {
  email: string;
  password: string;
  name: string;
  role: "admin" | "driver" | "passenger";
}
const registerUser = async ({
  email,
  password,
  name,
  role,
}: userDTO): Promise<IUser | null> => {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Username already exists");
    }
    const newUser = new User({
      email,
      password,
      role,
      name,
    });

    await newUser.save();

    return newUser;
  } catch (error: any) {
    throw new Error(error?.message || "error from register");
  }
};

const getUserById = async (_id: string) => {
  try {
    console.log(_id);
    const user = await User.findById(_id);
    if (!user) return "the post is not found";
    return user;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};
const edituser = async (_id: string, newData: Partial<IUser>) => {
  try {
    const user = await User.findById(_id);
    const updateUser = await User.findByIdAndUpdate(
      _id,
      {
        ...newData,
        password: user?.password,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return updateUser;
  } catch (error: any) {
    return `cant find the mongo DB ${error}`;
  }
};

const deleteUser = async (_id: string) => {
  try {
    const puzzele = await User.findByIdAndDelete(_id);
    return "user deleted";
  } catch (error: any) {
    return `cant find the mongo DB ${error}`;
  }
};
export { registerUser, getUserById, edituser, deleteUser };
