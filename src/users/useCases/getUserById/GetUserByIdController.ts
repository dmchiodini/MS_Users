import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";
import { container } from "tsyringe";
import { instanceToInstance } from "class-transformer";

export class GetUserByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getUserByIdUseCase = container.resolve(GetUserByIdUseCase);
    const { id } = request.params;

    const user = await getUserByIdUseCase.execute({ id });

    return response.status(200).json(instanceToInstance(user));
  }
}
