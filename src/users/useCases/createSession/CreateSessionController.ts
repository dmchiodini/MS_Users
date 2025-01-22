import { Request, Response } from "express";
import { container } from "tsyringe";
import { instanceToInstance } from "class-transformer";
import { CreateSessionUseCase } from "./CreateSessionUseCase";

export class CreateSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createSessionUseCase = container.resolve(CreateSessionUseCase);

    const { email, password } = request.body;
    const { user, token } = await createSessionUseCase.execute({
      email,
      password,
    });

    return response
      .status(201)
      .json(instanceToInstance(instanceToInstance({ user, token })));
  }
}
