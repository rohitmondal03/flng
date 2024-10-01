"use server"

import { redirect } from "next/navigation";
// import NodeRsa from "encrypt-rsa"

import { routes } from "@/config/routes";
import { getPageSession } from "@/lib/auth/lucia"
import { supabaseClient } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
// import { PRIVATE_KEY } from "@/config";


// Add new file to the storage
export const addFileToDatabase = async (data: FormData) => {
  // const nodeRsa = new NodeRsa();
  const session = await getPageSession();

  if (!session) {
    return {
      error: "You are not authorized to perform this action. Please login first."
    }
  }

  const userData = await db?.user.findFirst({
    where: {
      username: session.user.username,
    }
  })

  const file = data.get("file") as File;
  const fileName = data.get("file-name")?.toString();
  const isPrivate = data.get("private-checkbox")?.toString();

  const arrayBuffer = await file.arrayBuffer();

  const { data: fileData, error } = await supabaseClient
    .storage
    .from("files")
    .upload(fileName ?? file.name, arrayBuffer, {
      upsert: false
    })

  if (error) {
    return {
      error: error.message,
    }
  }

  if (fileData) {
    await db?.file.create({
      data: {
        name: fileName?.trim() ?? file.name.trim(),
        size: file.size,  //bytes
        user_id: session.user.userId,
        uploaded_at: new Date(),
        db_file_id: fileData.id,
        is_private: isPrivate === "on",
        file_type: file.type.startsWith("application") ? "Document" : "Image"
      }
    })
  }

  try {
    await db?.user.update({
      where: {
        username: session.user.username,
      },
      data: {
        files_uploaded: Number(userData?.files_uploaded) + 1,
        storage_used: Number(userData?.storage_used) + file.size,
      }
    })
  } catch (error) {
    return {
      error
    }
  }

  revalidatePath(routes.yourfiles());
  redirect(routes.yourfiles());
}



export const deleteFile = async (fileId: string, storageFileId: string) => {
  const session = await getPageSession();

  let fileData;

  try {
    fileData = await db?.file.delete({
      where: {
        id: fileId,
        db_file_id: storageFileId,
        user_id: session?.user.userId,
      }
    })

    const userData = await db?.user.findFirst({
      where: {
        id: session?.user.userId,
      }
    })

    await db?.user.update({
      where: {
        id: session?.user.userId
      },
      data: {
        storage_used: (userData?.storage_used ?? 0) - (fileData?.size ?? 0),
        files_uploaded: (userData?.files_uploaded ?? 1) - 1,
      }
    })
  }
  catch (error) {
    return {
      error
    }
  }

  if (!fileData) {
    return {
      error: "File not found"
    }
  }

  try {
    await supabaseClient
      .storage
      .from("files")
      .remove([fileData.name])
  }
  catch (error) {
    return {
      error
    }
  }

  revalidatePath(routes.yourfiles());
}