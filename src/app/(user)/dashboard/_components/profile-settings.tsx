import { getUserAuth } from "@/lib/auth/utils";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"


export async function ProfileSettings() {
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
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-4"
        >
          <div>
            <Label htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              autoComplete="off"
              placeholder="User's name"
              defaultValue={userData?.name || ""}
            />
          </div>
          <div>
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              autoComplete="off"
              placeholder="User's email"
              defaultValue={userData?.email || ""}
            />
          </div>
          <Button
            type="submit"
            variant="default"
          >
            Save Changes
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
