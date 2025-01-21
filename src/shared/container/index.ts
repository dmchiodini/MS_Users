import { IUserRepository } from "@users/repository/IUserRepository";
import { UserRepository } from "@users/repository/UserRepository";
import { CreateUserController } from "@users/useCases/createUser/CreateUserController";
import { DeleteUsersController } from "@users/useCases/deleteUser/DeleteUserController";
import { GetUserByIdController } from "@users/useCases/getUserById/GetUserByIdController";
import { GetUsersController } from "@users/useCases/getUsers/GetUsersController";
import { UpdateUserController } from "@users/useCases/updateUser/UpdateUserController";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton("CreateUserController", CreateUserController);
container.registerSingleton("DeleteUsersController", DeleteUsersController);
container.registerSingleton("GetUserByIdController", GetUserByIdController);
container.registerSingleton("GetUsersController", GetUsersController);
container.registerSingleton("UpdateUserController", UpdateUserController);
