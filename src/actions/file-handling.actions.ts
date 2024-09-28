"use server"

import { getPageSession } from "@/lib/auth/lucia"
import { supabaseClient } from "@/lib/supabase";


// Add new file to the storage
export const addFileToDatabse = async (data: FormData) => {
  const session = await getPageSession();

  if (!session) {
    return {
      error: "You are not authorized to perform this action. Please login first."
    }
  }

  const file = data.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();

  const { data: fileData, error } = await supabaseClient
    .storage
    .from("files")
    .upload(file.name, arrayBuffer, {
      upsert: false
    })

  if (error) {
    return {
      error: error
    }
  }

  if (fileData) {
    await db?.file.create({
      data: {
        name: file.name,
        is_private: false,
        size: file.size,
        user_id: session.user.userId,
        password: null,
        uploaded_at: new Date(),
        db_file_id: fileData?.id,
      }
    })
  }
}