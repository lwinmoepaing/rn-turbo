import { FastifyReply, FastifyRequest } from "fastify";
import { responseJson } from "../../../util/response";
import { LoveLetterUserInput } from "./love-letter.schema";
import {
  createLoveLetter,
  getLoveLetterByShortLink,
  getLoveLetterByUserID,
} from "./love-letter.service";
import { decryptText } from "../../../util/hash";

export const createLoveLetterHandler = async (
  req: FastifyRequest<{
    Body: LoveLetterUserInput;
  }>,
  res: FastifyReply
) => {
  try {
    const body = req.body;
    const newLoveLetter = await createLoveLetter({
      ...body,
      user_id: req.user.id,
    });
    return res
      .code(201)
      .send(responseJson(newLoveLetter, "Successfully Registerd"));
  } catch (err) {
    console.log(err);
    const mes = err instanceof Error ? err.message : "Something went wrong";
    return res.code(500).send(responseJson(null, mes));
  }
};

export const getLoveLetterByAuthorIdHandler = async (
  req: FastifyRequest<{ Params: { authorID: number } }>,
  res: FastifyReply
) => {
  try {
    const isSameAuthor = req.params.authorID == req.user.id;

    if (!isSameAuthor) {
      return res
        .code(401)
        .send(responseJson(null, "Not authorized to show list"));
    }

    const letters = await getLoveLetterByUserID(req.user.id);
    return res.code(200).send(responseJson(letters, ""));
  } catch (err) {
    const mes = err instanceof Error ? err.message : "Something went wrong";
    return res.code(500).send(responseJson(null, mes));
  }
};

export const getLoveLetterByLetterId = async (
  req: FastifyRequest<{
    Params: { shortID: string };
    Querystring: { code: string };
  }>,
  res: FastifyReply
) => {
  try {
    const letter = await getLoveLetterByShortLink(req.params.shortID);

    if (!letter) {
      return res.code(404).send(responseJson(null, "Not Found Love Letter"));
    }

    const isPublic = letter.is_public !== false;
    if (isPublic) {
      return res.code(200).send(responseJson(letter, "Get Letter Detail"));
    }

    const keyCode = req.query.code;
    if (!keyCode) {
      return res
        .code(200)
        .send(responseJson({ is_public: false }, "Get Letter Detail"));
    }

    const dCode = decryptText(letter.key_of_letter);
    if (dCode !== keyCode) {
      return res
        .code(200)
        .send(
          responseJson(
            { is_public: false },
            "You have no permission to read this letter"
          )
        );
    }

    return res.code(200).send(responseJson(letter, "Get Letter Detail"));
  } catch (err) {
    const mes = err instanceof Error ? err.message : "Something went wrong";
    return res.code(500).send(responseJson(null, mes));
  }
};