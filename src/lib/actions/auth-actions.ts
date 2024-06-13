"use server"


import { resetPasswordSchema } from "@/lib/validators/auth-schemas";
import { auth } from "../auth/lucia";


export const resetPasswordAction = async (formData: unknown) => {
  const result = resetPasswordSchema.safeParse(formData);

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    }
  }

  // change password
  result.data.userName

  // auth.
}