import fastify, { FastifyServerOptions } from "fastify";
import { articleRouter } from "./routes";

const App = (options: FastifyServerOptions) => {
  const app = fastify(options);

  app.get("/", async () => "Hello World!");
  app.register(articleRouter, { prefix: "/api/v1/articles" });
  return app;
};
export default App;
