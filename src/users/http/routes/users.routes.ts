import { User } from "@users/entities/User";
import { UserRepository } from "@users/repository/UserRepository";
import { createUserController } from "@users/useCases/createUser";
import { getUsersController } from "@users/useCases/getUsers";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRouter.get("/", (request, response) => {
  return getUsersController.handle(request, response);
});

export { usersRouter };
