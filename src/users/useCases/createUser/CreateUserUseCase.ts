import { AppError } from "@shared/errors/AppError";
import { User } from "@users/entities/User";
import { IUserRepository } from "@users/repository/IUserRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ name, email, password }: CreateUserDTO): Promise<User> {
    const emailExists = await this.userRepository.getUserByEmail(email);

    if (emailExists) {
      throw new AppError("The email is already being used", 400);
    }

    const passwordHashed = await hash(password, 10);

    return this.userRepository.createUser({
      name,
      email,
      password: passwordHashed,
    });
  }
}
