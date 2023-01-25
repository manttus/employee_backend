import mongoose from "mongoose";
import { Employee } from "../types/employeeModel";

const employeeSchema = new mongoose.Schema<Employee>({
  fullname: String,
  address: String,
  currentStatus: String,
  photo: Buffer,
  contact: [],
  socialLinks: [
    {
      linkedin: String,
      facebook: String,
      instagram: String,
      github: String,
      twitter: String,
    },
  ],
  designation: String,
  employeeId: String,
  joinedDate: Date,
  endDate: Date,
});

export default mongoose.model("Employee", employeeSchema);
