import { getUserAuth } from "@/lib/auth/utils"
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
  const username = auth.session?.user.username

  // get user's other data from db
  const userData = await db?.user.findFirst({
    where: {
      username: username,
    },
  });


  return (
    <Card className="h-full">
      <CardHeader className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
        </div>
      </CardContent>
    </Card>
  )
}
