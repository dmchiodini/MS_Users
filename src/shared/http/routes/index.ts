import { AppError } from "@shared/errors/AppError";
import { Request, Response, Router } from "express";
import { usersRouter } from "@users/http/routes/users.routes";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Olá Dev" });
});

routes.use("/users", usersRouter);

export { routes };
