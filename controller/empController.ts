import { Request, Response } from "express";
import Employee from "../models/Employee";

export const getEmp = async (req: Request, res: Response) => {
  const { id } = req.params;
  const employee = await Employee.findById({ employeeId: id });
  if (!employee) return res.status(404).send({ message: "Employee Not Found" });
  res.status(200).send({ message: "Employee fetched", employeeData: employee });
};
