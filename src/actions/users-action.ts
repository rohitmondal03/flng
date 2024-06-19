"use server"

import { revalidatePath } from "next/cache";

import { routes } from "@/config/routes";
import { getUserAuth } from "@/lib/auth/utils"
import { addUsersNameAndEmailSchema } from "@/lib/validators/user-schema";


export const addUsersNameAndEmail = async (formData: unknown) => {
  const data = addUsersNameAndEmailSchema.safeParse(formData);

  if (!data.success) {
    return {
      error: data.error.errors.map((error) => error.message)
    }
  }

  const name = data.data.name;
  const email = data.data.email;

  // get user's ID
  const auth = await getUserAuth();
  const userId = auth.session?.user.id;

  try {
    await db?.user.update({
      where: {
        id: userId,
      },
      data: {
        name: name,
        email: email,
      }
    })
    revalidatePath(routes.dashboard());
  }
  catch (err) {
    console.log(err)
    return {
      error: [`Error while updating user's name and email`]
    }
  }
}