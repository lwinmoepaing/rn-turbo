import { $ref } from "../../src/v1/auth/auth.schema";
import {
  loginUserHandler,
  registerUserHandler,
} from "../../src/v1/auth/auth.controller";
import { FastifyInstance } from "fastify";

const user = (app: FastifyInstance, opts: any, done: () => void) => {
  // Register User
  app.post(
    "/register",
    {
      schema: {
        body: $ref("registerUserSchema"),
      },
    },
    registerUserHandler
  );

  // Login User
  app.post(
    "/login",
    {
      schema: {
        body: $ref("loginUserSchema"),
      },
    },
    loginUserHandler
  );

  done();
};

module.exports = user;
