import { FastifyReply, FastifyRequest } from "fastify";
import { findAllUsers } from "./user.service";

export const getAllUsers = async (req: FastifyRequest, res: FastifyReply) => {
  const resMes = "get all user list...";
  const users = await findAllUsers();
  res.code(200).send({ message: resMes, data: users });
};
