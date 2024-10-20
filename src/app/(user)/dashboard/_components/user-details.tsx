import { getUserAuth } from "@/lib/auth/utils"
import { supabaseClient } from "@/lib/supabase";
import { ProfilePicUploadDialogContent } from "./profile-pic-upload-dialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card"


export async function UserDetails() {
  const auth = await getUserAuth();
  const username = auth.session?.user.username;

  // get user's data from db
  const userData = await db?.user.findFirst({
    where: {
      username: username,
    },
  });

  // get user's profile pic
  const profilePicURL = supabaseClient
    .storage
    .from("profile-pictures")
    .getPublicUrl(`/${userData?.username}`)
    .data
    .publicUrl

  return (
    <Card className="h-full">
      <CardHeader className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Avatar className="h-16 w-16">
              <AvatarImage src={profilePicURL} />
              <AvatarFallback>{userData?.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent className="dark:border-zinc-200">
            <ProfilePicUploadDialogContent profilePicURL={profilePicURL} />
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-y-8 justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Joined on
            </p>
            <p className="text-base font-medium">
              {userData?.onboarded_at && userData?.onboarded_at.toLocaleDateString("default", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Files Shared
            </p>
            <p className="text-base font-medium">
              {userData?.files_shared}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Files Received
            </p>
            <p className="text-base font-medium">
              {userData?.files_received}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Files Uploaded
            </p>
            <p className="text-base font-medium">
              {userData?.files_uploaded}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
