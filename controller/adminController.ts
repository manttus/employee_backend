import { Request, Response } from "express";
import Employee from "../models/Employee";

export const employees = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.find();
    res.status(200).send({ message: "Data fetched", employeeData: employee });
  } catch (err: Error | unknown) {
    res.status(401).send({ message: "Failed to fetch data" });
  }
};

export const employee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findOne({ employeeId: req.params.id });
    if (!employee) return res.status(405).send({ message: "User not found" });
    res.status(200).send({ message: "Data fetched", employeeData: employee });
  } catch (err: Error | unknown) {
    res.status(401).send({ message: "Failed to fetch data" });
  }
};

export const addEmployee = async (req: Request, res: Response) => {
  const user = await Employee.findOne({ employeeId: req.body.employeeId });
  if (user) return res.status(405).send({ message: "User already exists" });

  try {
    const newEmp = new Employee({
      employeeId: req.body.employeeId,
      fullname: req.body.fullname,
      address: req.body.address,
      photo: req.body.photo,
      currentStatus: req.body.status,
      contact: req.body.contact,
      socialLinks: req.body.socialLinks,
      designation: req.body.designation,
      joinedDate: req.body.joinedDate,
      endDate: req.body.endDate,
    });
    newEmp.save();
    res
      .status(200)
      .send({ message: "New employee added", employeeData: newEmp });
  } catch (err: Error | unknown) {
    res.status(401).send({ message: "Failed to add employee", error: err });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  const user = await Employee.findOne({ employeeId: req.body.employeeId });
  if (!user) return res.status(405).send({ message: "User not found" });
  try {
    const employee = await Employee.findOneAndUpdate(
      { employeeId: req.params.id },
      {
        fullname: req.body.fullname,
        address: req.body.address,
        photo: req.body.photo,
        currentStatus: req.body.status,
        contact: req.body.contact,
        socialLinks: req.body.socialLinks,
        designation: req.body.designation,
        joinedDate: req.body.joinedDate,
        endDate: req.body.endDate,
      }
    );
    res
      .status(200)
      .send({ message: "Employee updated", employeeData: employee });
  } catch (err: Error | unknown) {
    res.status(401).send({ message: "Failed to update employee" });
  }
};
