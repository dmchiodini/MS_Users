import { UserRepository } from "@users/repository/UserRepository";
import { GetUserUseCase } from "./GetUsersUseCase";
import { GetUsersController } from "./GetUsersController";

const userRepository = UserRepository.getInstance();
const geteUsersUseCase = new GetUserUseCase(userRepository);
export const getUsersController = new GetUsersController(geteUsersUseCase);
