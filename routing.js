import { Router } from "https://deno.land/x/oak/mod.ts";

import getUsers from "./handlers/getUsers.js";
import getUserDetails from "./handlers/getUserDetails.js";
import createUser from "./handlers/createUser.js";
import updateUser from "./handlers/updateUser.js";
import deleteUser from "./handlers/deleteUser.js";

const router = new Router();

router
  .get("/users", getUsers)
  .get("/users/:id", getUserDetails)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  .delete("/users/:id", deleteUser);

export default router;