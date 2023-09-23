import * as nanoid from "nanoid";
import { LoveLetterUserInput } from "./love-letter.schema";
import prisma from "../../../util/prisma";
import { encryptText } from "../../../util/hash";

export const createLoveLetter = async (
  input: LoveLetterUserInput & { user_id: number }
) => {
  const shortID = nanoid.nanoid();

  const newLoveLetter = await prisma.loveLetter.create({
    data: {
      user_id: input.user_id,
      beloved_name: encryptText(input.beloved_name),
      letter: encryptText(input.letter),
      short_link: shortID,
      is_public: input.is_public,
      key_of_letter: encryptText(input.key_of_letter || "123456"),
    },
  });

  return newLoveLetter;
};

export const getLoveLetterByUserID = async (
  authorId: number,
  page_no?: number
) => {
  // PageNo can be needed for pagination LOL
  // I don't know how to implement now ahha
  return prisma.loveLetter.findMany({
    select: {
      id: true,
      letter: true,
      beloved_name: true,
      short_link: true,
      user_id: true,
      key_of_letter: true,
      is_public: true,
      created_at: true,
    },
    where: {
      user_id: authorId,
    },
  });
};

export const getLoveLetterByShortLink = async (shorLink: string) => {
  return prisma.loveLetter.findUnique({
    where: {
      short_link: shorLink,
    },
  });
};
