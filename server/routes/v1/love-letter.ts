import { FastifyInstance } from "fastify";
import {
  createLoveLetterHandler,
  getLoveLetterByAuthorIdHandler,
  getLoveLetterByLetterId,
} from "../../src/v1/love-letter/love-letter.controller";
import { $ref } from "../../src/v1/love-letter/love-letter.schema";

const loveLetterRoutes = (app: FastifyInstance, opts: any, done: () => void) => {
  const requireAuth = {
    preHandler: [app?.authenticate],
  };

  // Create New LoveLetter
  // url: /api/v1/love-letter/create
  app.post(
    "/create",
    {
      schema: {
        body: $ref("loveLetterSchema"),
      },
      ...requireAuth,
    },
    createLoveLetterHandler
  );

  // Fetching All LoveLetter Associated With Author
  // url: /api/v1/love-letter/author/:authorID
  app.get("/author/:authorID", requireAuth, getLoveLetterByAuthorIdHandler);

  // Get LoveLetter Detail By Letter ID
  // url: /api/v1/love-letter/detail/:shortID
  app.get("/detail/:shortID", getLoveLetterByLetterId);

  done();
};

module.exports = loveLetterRoutes;
