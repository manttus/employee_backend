import { Types } from "mongoose";

type Socials = {
  instagram: String;
  facebook: String;
  linkedin: String;
  github: String;
  twitter: String;
};

export interface Employee {
  employeeId: String;
  fullname: String;
  address: String;
  photo?: Buffer;
  currentStatus: String;
  contact: Types.DocumentArray<String>;
  socialLinks?: Types.DocumentArray<Socials>;
  designation: String;
  joinedDate?: Date;
  endDate?: Date;
}
