import prisma from "../../../util/prisma";

export const findUserByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: { email: email },
  });
};

export const findAllUsers = () => {
  return prisma.user.findMany({
    select: {
      email: true,
      name: true,
      id: true,
    },
  });
};
