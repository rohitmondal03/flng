"use server"

import { resetPasswordSchema } from "@/lib/validators/auth-schemas";
import { auth } from "../auth/lucia";
import { getUserAuth } from "../auth/utils";


export const resetPasswordAction = async (formData: unknown) => {
  const result = resetPasswordSchema.safeParse(formData);

  if (!result.success) {
    return {
      error: result.error.errors,
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
      error: {
        message: `User with username ${enteredUsername} does not exist`
      }
    }
  }

  // call the API to change the password
  try {
    const userAuth = await auth.updateKeyPassword("username", enteredUsername, newPassword)
    console.log("Hoagaya bhai", userAuth)
  } catch (err) {
    console.log("error", err)
  }

  // return {
  //   success: {
  //     message: `Password changed successfully for ${enteredUsername}`
  //   }
  // }
}