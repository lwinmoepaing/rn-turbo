import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const loveLetterSchemaCore = {
  letter: z.string({
    required_error: "Letter Text is required",
    invalid_type_error: "Letter Text must be a string",
  }),
  beloved_name: z.string({
    required_error: "Beloved name is required",
    invalid_type_error: "Beloved name must be a string",
  }),
  is_public: z.boolean({
    required_error: "Is published field is required",
    invalid_type_error: "Is published field must be a string",
  }),
  key_of_letter: z.string().default(""),
};

const loveLetterSchema = z.object({
  ...loveLetterSchemaCore,
});

export type LoveLetterUserInput = z.infer<typeof loveLetterSchema>;

export const { schemas, $ref } = buildJsonSchemas(
  {
    loveLetterSchema,
  },
  {
    $id: "LoveLetterSchema",
    target: "jsonSchema7",
    errorMessages: true,
  }
);
