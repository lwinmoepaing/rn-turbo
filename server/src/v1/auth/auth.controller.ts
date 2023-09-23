import { FastifyReply, FastifyRequest } from "fastify";
import { responseJson } from "../../../util/response";
import { LoginUserInput, RegisterUserInput } from "./auth.schema";
import { createUser } from "./auth.service";
import { findUserByEmail } from "../user/user.service";
import { verifyPassword } from "../../../util/hash";
import { app } from "../../../server";

export const loginUserHandler = async (
  req: FastifyRequest<{
    Body: LoginUserInput;
  }>,
  res: FastifyReply
) => {
  try {
    const body = req.body;

    // Checking if the user exists
    const user = await findUserByEmail(body.email);
    if (!user) {
      return res
        .code(401)
        .send(responseJson(null, "Invalid email or password"));
    }

    // Verify the password
    const isCorrectPassword = verifyPassword({
      canditatePassword: body.password,
      salt: user.salt,
      hash: user.password,
    });
    if (!isCorrectPassword) {
      return res.code(401).send(responseJson(null, "Invalid Password"));
    }

    const signData = { id: user.id, email: user.email, name: user.name };
    const accessToken = app.jwt.sign(signData);
    const resData = { ...signData, accessToken: accessToken };

    return res.code(200).send(responseJson(resData, "Successfully Login"));
  } catch (err) {
    const mes = err instanceof Error ? err.message : "Something went wrong";
    return res.code(500).send(responseJson(null, mes));
  }
};

export const registerUserHandler = async (
  req: FastifyRequest<{
    Body: RegisterUserInput;
  }>,
  res: FastifyReply
) => {
  try {
    const body = req.body;
    const user = await findUserByEmail(body.email);
    if (user) {
      return res.code(401).send(responseJson(null, "Already Registered"));
    }

    const { id, name, email } = await createUser(body);
    return res
      .code(201)
      .send(responseJson({ id, name, email }, "Successfully Registerd"));
  } catch (err) {
    const mes = err instanceof Error ? err.message : "Something went wrong";
    return res.code(500).send(responseJson(null, mes));
  }
};
