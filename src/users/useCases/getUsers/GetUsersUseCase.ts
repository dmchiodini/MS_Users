import { User } from "@users/entities/User";
import {
  IUserRepository,
  UserPaginateProps,
} from "@users/repository/IUserRepository";
import { inject, injectable } from "tsyringe";

type getUsersUseCaseParams = {
  page: number;
  limit: number;
};

@injectable()
export class GetUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    page,
    limit,
  }: getUsersUseCaseParams): Promise<UserPaginateProps> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    return this.userRepository.getUsers({ page, skip, take });
  }
}
