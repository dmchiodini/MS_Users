import { AppError } from "@shared/errors/AppError";
import { Request, Response, Router } from "express";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  throw new AppError("Deu ruim", 400);
});

export { routes };
