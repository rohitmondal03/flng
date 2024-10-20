"use server"

import { revalidatePath } from "next/cache";

import { routes } from "@/config/routes";
import { getUserAuth } from "@/lib/auth/utils"
import { addUsersNameAndEmailSchema } from "@/lib/validators/user-schema";
import { supabaseClient } from "@/lib/supabase";
import { getPageSession } from "@/lib/auth/lucia";


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

export const uploadProfilePicAction = async (formData: FormData) => {
  const session = await getPageSession();
  const img = formData.get("profile") as File;

  if (!session) {
    return {
      error: "Session not found !!"
    }
  }

  try {
    const arrayBuffer = await img.arrayBuffer();

    const { data: imgData, error } = await supabaseClient
      .storage
      .from("profile-pictures")
      .upload(session.user.username, arrayBuffer, {
        upsert: false,
      })

    if (error) {
      throw new Error(error.message)
    }

    await db?.usersProfilePictures.create({
      data: {
        user_id: session.user.userId,
        db_file_id: imgData.id,
      },
    })

    revalidatePath("/dashboard");
  }
  catch (error) {
    return {
      error
    }
  }
}