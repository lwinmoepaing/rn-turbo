import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().max(100),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().max(100),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;
