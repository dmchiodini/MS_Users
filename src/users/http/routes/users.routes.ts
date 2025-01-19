import { User } from "@users/entities/User";
import { UserRepository } from "@users/repository/UserRepository";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const usersRouter = Router();
const userRepository = new UserRepository();

usersRouter.post("/", (request, response) => {
  const { name, email, password } = request.body;
  const user = userRepository.createUser({
    name,
    email,
    password,
  });

  return response.status(201).json(user);
});

export { usersRouter };
