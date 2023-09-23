import { z } from "zod";

export type TCreateLetterSchema = z.infer<typeof createLetterSchema>;

export const createLetterSchema = z.object({
  letter: z.string(),
  beloved_name: z.string(),
  is_public: z.boolean().default(true),
  key_of_letter: z.string().default("123456"),
});
