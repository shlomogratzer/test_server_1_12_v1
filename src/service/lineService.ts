import Line, { ILine, ISchedule } from "../models/line";

interface lineDto {
  schedule: ISchedule;
  lineNumber: string;
  stations: string[];
  name: string;
}
const createLine = async ({
  schedule,
  lineNumber,
  stations,
  name,
}: lineDto): Promise<ILine | null> => {
  try {
    const existingLine = await Line.findOne({ lineNumber });
    if (existingLine) {
      throw new Error("Line already exists");
    }
    const newLine = new Line({
      schedule,
      lineNumber,
      stations,
      name,
    });

    await newLine.save();

    return newLine;
  } catch (error: any) {
    throw new Error(error?.message || "error from register");
  }
};

export { createLine };
