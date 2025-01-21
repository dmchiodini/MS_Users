import { AppError } from "@shared/errors/AppError";
import { User } from "@users/entities/User";
import { IUserRepository } from "@users/repository/IUserRepository";
import { UserRepository } from "@users/repository/UserRepository";
import { inject, injectable } from "tsyringe";

type UpdateUserDTO = {
  id: string;
  name: string;
};

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ id, name }: UpdateUserDTO): Promise<User> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new AppError(`User not found whit id '${id}'`, 404);
    }

    user.name = name;

    return this.userRepository.updateUser(user);
  }
}
