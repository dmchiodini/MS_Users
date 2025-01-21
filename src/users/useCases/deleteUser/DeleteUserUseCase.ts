import { AppError } from "@shared/errors/AppError";
import { User } from "@users/entities/User";
import { IUserRepository } from "@users/repository/IUserRepository";
import { inject, injectable } from "tsyringe";

type DeleteUserUseCaseParams = {
  id: string;
};

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ id }: DeleteUserUseCaseParams): Promise<User> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new AppError(`User not found with id '${id}'`, 404);
    }

    return this.userRepository.deleteUser(id);
  }
}
