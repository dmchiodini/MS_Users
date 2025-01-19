import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const usersRouter = Router();
const users = [];

usersRouter.post("/", (request, response) => {
  const { name, email, password } = request.body;

  const user = {
    id: uuidv4(),
    name,
    email,
    password,
    created_at: new Date(),
  };

  users.push(user);

  return response.status(201).json(user);
});

export { usersRouter };
