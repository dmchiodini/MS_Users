import { AppError } from "@shared/errors/AppError";
import { User } from "@users/entities/User";
import { UserRepository } from "@users/repository/UserRepository";

type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, email, password }: CreateUserDTO): Promise<User> {
    const emailExists = await this.userRepository.getUserByEmail(email);

    if (emailExists) {
      throw new AppError("The email is already being used", 400);
    }

    return this.userRepository.createUser({
      name,
      email,
      password,
    });
  }
}
