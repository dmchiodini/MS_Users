import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";
import { instanceToInstance } from "class-transformer";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createRoleUseCase = container.resolve(CreateUserUseCase);

    const { name, email, password } = request.body;
    const user = await createRoleUseCase.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(instanceToInstance(user));
  }
}
