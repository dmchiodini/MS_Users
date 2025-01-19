import "dotenv/config";
import express, { Request, Response } from "express";
import "express-async-errors";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Olá Diego" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
