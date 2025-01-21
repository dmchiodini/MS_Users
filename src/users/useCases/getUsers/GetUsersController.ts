import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";
import { User } from "@users/entities/User";
import { container } from "tsyringe";
import { instanceToInstance } from "class-transformer";

export class GetUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getUsersUseCase = container.resolve(GetUsersUseCase);
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1;

    const limit =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 10;

    const users = await getUsersUseCase.execute({ page, limit });

    return response.status(200).json(instanceToInstance(users));
  }
}
