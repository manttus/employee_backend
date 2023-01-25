import { Router } from "express";

import {
  addEmployee,
  employee,
  employees,
  updateEmployee,
} from "../controller/adminController";

const adminRouter = Router();
adminRouter.get("/employees", employees);
adminRouter.get("/employee/:id", employee);
adminRouter.post("/addEmp", addEmployee);
adminRouter.patch("/updateEmp/:id", updateEmployee);
export default adminRouter;
