"use server"

// import NodeRsa from "encrypt-rsa"

import { getPageSession } from "@/lib/auth/lucia"
import { supabaseClient } from "@/lib/supabase";
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
      id: session.user.userId,
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
        is_private: isPrivate === "on" ? true : false,
      }
    })

    await db?.user.update({
      where: {
        id: session.user.userId,
      },
      data: {
        files_uploaded: userData?.files_uploaded ?? 0 + 1,
        
      }
    })
  }
}