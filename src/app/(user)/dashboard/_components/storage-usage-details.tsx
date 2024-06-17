import { getUserAuth } from "@/lib/auth/utils";
import { Progress } from "@/components/ui/progress"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"


export async function StorageUsageDetails() {
  const auth = await getUserAuth();
  const username = auth.session?.user.username

  // get user's other data from db
  const userData = await db?.user.findFirst({
    where: {
      username: username,
    },
  });


  // progress bar value
  const progressValue = Number(userData?.storage_used) / Number(userData?.total_storage) * 100


  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Storage Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Used Storage
            </p>
            <p className="text-base font-medium">
              {userData?.storage_used} GB {" "}
              <span className="text-muted-foreground">({`${progressValue}`}% used)</span>
            </p>
          </div>
          <Progress value={progressValue} />
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Storage
            </p>
            <p className="text-base font-medium">
              {userData?.total_storage} GB
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
