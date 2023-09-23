import { getAllUsers } from "../../src/v1/user/user.controller";
import { FastifyInstance } from "fastify";

const user = (app: FastifyInstance, opts: any, done: () => void) => {
  const requiredAuth = {
    preHandler: [app?.authenticate],
  };
  
  // When Calling to show all users
  app.get("/all-user", requiredAuth, getAllUsers);
  done();
};

module.exports = user;
