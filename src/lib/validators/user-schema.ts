import { z } from "zod";


export const addUsersNameAndEmailSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name should have minimum 3 characters."
    }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address."
    }),
});