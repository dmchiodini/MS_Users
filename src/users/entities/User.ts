import { v4 as uuidv4 } from "uuid";

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
