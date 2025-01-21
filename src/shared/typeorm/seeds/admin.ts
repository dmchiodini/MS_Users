import { v4 as uuidv4 } from "uuid";
import { dataSource } from "@shared/typeorm";
import { hash } from "bcryptjs";

async function create() {
  const connection = await dataSource.initialize();

  const userId = uuidv4();
  const password = await hash("admin", 10);

  await connection.query(`
    INSERT INTO users (id, name, email, password) VALUES ('${userId}', 'Admin', 'admin@admin.com', '${password}')
    `);

  await connection.destroy();
}

create().then(() => console.log("User admin created!"));
