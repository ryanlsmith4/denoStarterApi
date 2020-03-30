import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.js";
import router from "./routing.js";
import notFound from "./handlers/notFound.js";
import errorMiddleware from "./middlewares/error.js";

const app = new Application();

app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

console.log(`Listening on ${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);