import { AppError } from "@shared/errors/AppError";
import { User } from "@users/entities/User";
import { IUserRepository } from "@users/repository/IUserRepository";
import { inject, injectable } from "tsyringe";

type GetUserByIdParams = {
  id: string;
};

@injectable()
export class GetUserByIdUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ id }: GetUserByIdParams): Promise<User> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new AppError(`User not found with id '${id}'`, 404);
    }

    return user;
  }
}
