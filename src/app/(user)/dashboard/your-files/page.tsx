import { getUserAuth } from "@/lib/auth/utils"
import { FileCard } from "./_components/file-card";
import Link from "next/link";
import { routes } from "@/config/routes";
import { supabaseClient } from "@/lib/supabase";


export default async function YourFilesPage() {
  const userData = await getUserAuth();

  // get user's files
  const usersFilesData = await db?.file.findMany({
    where: {
      user_id: userData.session?.user.id,
    },
    select: {
      id: true,
      name: true,
      size: true,
      is_private: true,
      uploaded_at: true,
      shared_with: true,
      db_file_id: true,
      file_type: true,
    }
  })

  // get file details from storage
  // const getFile =  async () => {
  //   await supabaseClient
  //     .storage
  //     .from("files")
  // } 


  return (
    <div className="w-full min-h-screen flex flex-col pb-5 p-4 sm:py-10 px-4 lg:px-20 space-y-16">
      <header className="flex items-center justify-between w-full">
        <h1 className="text-2xl sm:text-3xl font-bold underline underline-offset-4 decoration-slate-400 w-fit">
          <span className="text-zinc-500">
            {userData.session?.user.name}'s {" "}
          </span>
          <span className="">uploaded files</span>
        </h1>
      </header>
      <div className="grid grid-cols-3 gap-8">
        {usersFilesData && usersFilesData?.length > 0 ? usersFilesData?.map((file, idx) => (
          <FileCard {...file} key={idx} />
        )) : (
          <div>
            <p className="text-xl font-semibold">
              No files found
            </p>
            <Link
              href={routes.uploadFiles()}
              className="text-slate-700 dark:text-slate-400 underline underline-offset-4"
            >
              Click here to start uploading files
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
