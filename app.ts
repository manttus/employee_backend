import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log({ message: `Listening to Port ${PORT}` });
});
