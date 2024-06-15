import { Progress } from "@/components/ui/progress"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"


export function StorageUsageDetails() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Storage Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Used Storage</p>
            <p className="text-base font-medium">18.2 GB</p>
          </div>
          <Progress value={65} />
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Storage</p>
            <p className="text-base font-medium">28 GB</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
