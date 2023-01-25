import { Router } from "express";
import { getEmp } from "../controller/empController";

const employeeRoute = Router();

employeeRoute.get("/getEmm/:id", getEmp);

export default employeeRoute;
