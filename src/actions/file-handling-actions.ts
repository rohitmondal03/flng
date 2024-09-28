"use server"

import { getPageSession } from "@/lib/auth/lucia"


// Add new file to the database
export const addFileToDatabse = async (data: FormData) => {
  const session = await getPageSession();

  if(!session) {
    return {
      error: "You are not authorized to perform this action. Please login first."
    }
  }

  console.log(data.get("file"))

  // const files = data.files[0];  // list of files
  // const password= data.password; // password, if any
  // const receivers = data.receivers; // receiver's usernames

  // if(!files || files.length === 0) {
  //   return {
  //     error: "Please select atleast 1 file to upload"
  //   }
  // }


}