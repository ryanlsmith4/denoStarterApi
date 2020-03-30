import { getUsers } from "../services/users.js";

export default async ({ response }) => {
  response.body = await getUsers();
};