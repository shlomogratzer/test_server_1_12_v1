import mongoose, { Schema, Document, Types } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "driver" | "passenger";
  comparePassword(userPassword: string): Promise<boolean>;
}
const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
      type: String,
      enum: ["admin", "driver", "passenger"],
      required: true,
    },
  },
  { timestamps: true }
);
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});
UserSchema.index({ email: 1 });

UserSchema.methods.comparePassword = async function (userPassword: string) {
  return await bcrypt.compare(userPassword, this.password);
};

export default mongoose.model<IUser>("User", UserSchema);
