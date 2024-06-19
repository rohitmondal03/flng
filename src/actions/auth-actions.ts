"use server"

import { resetPasswordSchema } from "@/lib/validators/auth-schemas";
import { auth } from "../lib/auth/lucia";
import { getUserAuth } from "../lib/auth/utils";


export const resetPasswordAction = async (formData: unknown) => {
  const result = resetPasswordSchema.safeParse(formData);

  if (!result.success) {
    return {
      error: result.error.errors.map((error) => error.message)
    }
  }

  // change password
  const enteredUsername = result.data.userName;
  const newPassword = result.data.password;
  const newConfirmPassword = result.data.confirmPassword;

  // get user's id and check whether user exits or not !!
  const user = await db?.user.findFirst({
    where: {
      username: enteredUsername
    }
  })

  if (!user) {
    return {
      error: [`User with username ${enteredUsername} does not exist`]
    }
  }

  // call the API to change the password
  try {
    const userAuth = await auth.updateKeyPassword("username", enteredUsername, newPassword)
  } catch (err) {
    return {
      error: [`Error while changing password for ${enteredUsername}`]
    }
  }
}