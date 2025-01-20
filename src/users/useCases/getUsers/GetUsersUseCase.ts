import { User } from "@users/entities/User";
import { UserRepository } from "@users/repository/UserRepository";

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
