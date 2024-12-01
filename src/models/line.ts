import mongoose, { Schema, Document } from "mongoose";

export interface ILine extends Document {
  lineNumber: string;
  name: string;
  stations: string[];
  schedule: ISchedule[];
}
export interface ISchedule extends Document {
  departureTime: string;
  arrivalTime: string;
  station: string;
}
const LineSchema = new Schema<ILine>(
  {
    name: {
      type: String,
      required: [true, "username is required"],
    },
    lineNumber: {
      type: String,
      unique: true,
    },
    stations: {
      type: [String],
    },
    schedule: {
      type: [Object],
    },
  },
  { timestamps: true }
);

export default mongoose.model<ILine>("Line", LineSchema);
