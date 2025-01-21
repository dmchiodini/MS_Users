import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { container } from "tsyringe";
import { instanceToInstance } from "class-transformer";

export class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const { id } = request.params;
    const { name } = request.body;

    const user = await updateUserUseCase.execute({
      id,
      name,
    });

    return response.status(200).json(instanceToInstance(user));
  }
}
