import { User } from "@users/entities/User";

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type PaginateParams = {
  page: number;
  skip: number;
  take: number;
};

export type UserPaginateProps = {
  per_page: number;
  total: number;
  current_page: number;
  data: User[];
};

export interface IUserRepository {
  createUser({ name, email, password }: CreateUserDTO): Promise<User>;
  updateUser(user: User): Promise<User>;
  getUsers({ page, skip, take }: PaginateParams): Promise<UserPaginateProps>;
  getUserByEmail(email: string): Promise<User | null>;
  getUserById(id: string): Promise<User | null>;
  deleteUser(id: string): Promise<User>;
}
