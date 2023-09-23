import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const loginCore = {
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }),
};

const loginUserSchema = z.object({
  ...loginCore,
});

const registerUserSchema = z.object({
  ...loginCore,
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
});

export type LoginUserInput = z.infer<typeof loginUserSchema>;
export type RegisterUserInput = z.infer<typeof registerUserSchema>;

export const { schemas, $ref } = buildJsonSchemas(
  {
    loginUserSchema,
    registerUserSchema,
  },
  {
    $id: "AuthSchema",
    target: "jsonSchema7",
    errorMessages: true,
  }
);
