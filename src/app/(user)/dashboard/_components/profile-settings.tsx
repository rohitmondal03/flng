import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"


export function ProfileSettings() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="john@example.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </div>
      </CardContent >
    </Card >
  )
}
