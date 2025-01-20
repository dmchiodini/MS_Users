import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUsersUseCase";
import { User } from "@users/entities/User";

export class GetUsersController {
  constructor(private getUsersUseCase: GetUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const users = await this.getUsersUseCase.execute();

    return response.status(200).json(users);
  }
}
