import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface IBuse extends Document {
  licensePlate: string;
  buseModel: string;
  capacity: string;
  status: "service" | "out of service" | "maintenance";
  driverID: ObjectId;
  routeID: ObjectId;
}

const LineSchema = new Schema<IBuse>(
  {
    licensePlate: {
      type: String,
    },
    buseModel: {
      type: String,
    },
    status: {
      type: String,
    },
    driverID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    routeID: {
      type: Schema.Types.ObjectId,
      ref: "Line",
    },
  },
  { timestamps: true }
);

export default mongoose.model<IBuse>("Buse", LineSchema);
