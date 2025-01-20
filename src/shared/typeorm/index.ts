import { User } from "@users/entities/User";
import { DataSource } from "typeorm";
import { CreateUserTable1737398906043 } from "./migrations/1737398906043-CreateUserTable";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [User],
  migrations: [CreateUserTable1737398906043],
});

export { dataSource };
