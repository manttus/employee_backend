import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import adminRouter from "./routes/admin";
import cors from "cors";
import employeeRoute from "./routes/employee";

dotenv.config();

const app = express();
const PORT = process.env.port || 3000;
app.use(express.json());
app.use(cors());

/* The strictQuery option, when set to true, makes Mongoose return an error if you try to query a field that doesn't exist in the model's schema. 
When set to false, Mongoose will return an empty result instead of an error. */

mongoose.set("strictQuery", true);
mongoose.connect(process.env.connect!, (err: mongoose.CallbackError) => {
  if (err) {
    return console.log({ message: "Connection Failed" });
  }
  console.log({ message: "Connect Succefully" });
});

app.use("/admin", adminRouter);
app.use("/", employeeRoute);

app.listen(PORT, () => {
  console.log({ message: `Listening to Port ${PORT}` });
});
