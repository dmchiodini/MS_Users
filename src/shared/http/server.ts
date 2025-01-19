import express from "express";
import "express-async-errors";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Olá Diego" });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
