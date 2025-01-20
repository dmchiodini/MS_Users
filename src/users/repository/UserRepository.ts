import { User } from "@users/entities/User";

type UserCreateDTO = {
  name: string;
  email: string;
  password: string;
};

export class UserRepository {
  private users: User[];
  private static INSTANCE: UserRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }
    return UserRepository.INSTANCE;
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

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((u) => u.email === email);
    return user;
  }

  async getUserById(id: string): Promise<User | undefined> {
    const user = this.users.find((u) => u.id === id);
    return user;
  }
}
