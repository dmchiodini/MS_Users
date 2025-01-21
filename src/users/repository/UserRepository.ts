import { User } from "@users/entities/User";
import { dataSource } from "@shared/typeorm";
import { Repository } from "typeorm";
import {
  CreateUserDTO,
  IUserRepository,
  PaginateParams,
  UserPaginateProps,
} from "./IUserRepository";

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async createUser({ name, email, password }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({ name, email, password });
    return this.repository.save(user);
  }

  async updateUser(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async getUsers({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UserPaginateProps> {
    const [users, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: users,
    };

    return result;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }

  async getUserById(id: string): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.getUserById(id);
    await this.repository.delete({ id });
    return user;
  }
}
