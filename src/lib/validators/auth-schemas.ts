import { z } from "zod";


export const resetPasswordSchema = z.object({
  userName: z.string().min(1, {
    message: "Password should length between 1 and 31"
  }).max(31, {
    message: "Password should length between 1 and 31",
  }),
  password: z.string().min(8, {
    message: "Password should have minimum 8 characters"
  }),
  confirmPassword: z.string(),
}).refine(data => data.password !== data.confirmPassword, {
  message: "Password and Confirm Password should be same"
})