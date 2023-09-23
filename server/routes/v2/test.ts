import { testApi } from "../../src/v2/test-api/testapi.controller";
import { FastifyInstance } from "fastify";

const test = (app: FastifyInstance, opts: any, done: () => void) => {
  app.get("/", testApi);
  done();
};

module.exports = test;
