import { FastifyReply, FastifyRequest } from "fastify";

export const testApi = async (req: FastifyRequest, res: FastifyReply) => {
  const resMes = "Testing Api for V2";
  res.code(200).send({ message: resMes });
};
