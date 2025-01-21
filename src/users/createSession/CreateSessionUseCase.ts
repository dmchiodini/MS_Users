import { AppError } from "@shared/errors/AppError";
import { User } from "@users/entities/User";
import { IUserRepository } from "@users/repository/IUserRepository";
import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "@config/auth";

type CreateSessionDTO = {
  email: string;
  password: string;
};

type IResponse = {
  user: User;
  token: string;
};

@injectable()
export class CreateSessionUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ email, password }: CreateSessionDTO): Promise<IResponse> {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new AppError("Incorrect email/password combination", 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError("Incorrect email/password combination", 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
