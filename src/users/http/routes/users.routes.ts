import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { container } from "tsyringe";
import { CreateUserController } from "@users/useCases/createUser/CreateUserController";
import { GetUsersController } from "@users/useCases/getUsers/GetUsersController";
import { UpdateUserController } from "@users/useCases/updateUser/UpdateUserController";
import { DeleteUsersController } from "@users/useCases/deleteUser/DeleteUserController";
import { GetUserByIdController } from "@users/useCases/getUserById/GetUserByIdController";
import { CreateSessionController } from "@users/createSession/CreateSessionController";

const usersRouter = Router();
const createUserController = container.resolve(CreateUserController);
const getUsersController = container.resolve(GetUsersController);
const getUserByIdController = container.resolve(GetUserByIdController);
const updateUserController = container.resolve(UpdateUserController);
const deleteUsersController = container.resolve(DeleteUsersController);
const createSessionController = container.resolve(CreateSessionController);

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  (request, response) => {
    return createUserController.handle(request, response);
  }
);

usersRouter.get(
  "/",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (request, response) => {
    return getUsersController.handle(request, response);
  }
);

usersRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return getUserByIdController.handle(request, response);
  }
);

usersRouter.patch(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request, response) => {
    return updateUserController.handle(request, response);
  }
);

usersRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return deleteUsersController.handle(request, response);
  }
);

usersRouter.post(
  "/session",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  (request, response) => {
    return createSessionController.handle(request, response);
  }
);

export { usersRouter };
