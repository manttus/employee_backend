import { Router } from "express";
import { getEmp } from "../controller/empController";

const employeeRoute = Router();

employeeRoute.get("/getEmp/:id", getEmp);

export default employeeRoute;
