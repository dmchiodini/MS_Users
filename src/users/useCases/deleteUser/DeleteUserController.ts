import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { User } from "@users/entities/User";
import { container } from "tsyringe";
import { instanceToInstance } from "class-transformer";

export class DeleteUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteUsersUseCase = container.resolve(DeleteUserUseCase);
    const { id } = request.params;

    const user = await deleteUsersUseCase.execute({ id });

    return response.status(200).json(instanceToInstance(user));
  }
}
