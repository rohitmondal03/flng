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
  // Get current suer's session
  const userDetails = await getUserAuth();
  const user = userDetails.session?.user;


  return (
    <Card className="h-full">
      <CardHeader className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-medium">
            {user?.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {user?.email}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Joined on
            </p>
            <p className="text-base font-medium">
              {new Date().toLocaleString("default", {
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
              24
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Files Received
            </p>
            <p className="text-base font-medium">
              18
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
