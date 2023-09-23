import { hashPassword } from "../../../util/hash";
import prisma from "../../../util/prisma";
import { RegisterUserInput } from "./auth.schema";

export const createUser = async (input: RegisterUserInput) => {
  const { password, ...rest } = input;

  const { hash, salt } = hashPassword(password);

  const user = await prisma.user.create({
    data: { ...rest, salt, password: hash },
  });

  return user;
};
