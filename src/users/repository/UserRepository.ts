import { User } from "@users/entities/User";

type UserCreateDTO = {
  name: string;
  email: string;
  password: string;
};

export class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  createUser({ name, email, password }: UserCreateDTO) {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      created_at: new Date(),
    });

    this.users.push(user);

    return user;
  }
}
