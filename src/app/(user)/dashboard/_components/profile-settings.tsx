import { TUserSchema } from "@/lib/@types/prisma-schema.types";
import { getUserAuth } from "@/lib/auth/utils";
import { EmailAndNameInputForm } from "./email-and-name-input-form";
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
  const userData: TUserSchema = await db?.user.findFirst({
    where: {
      username: username,
    },
  }) as TUserSchema;


  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <EmailAndNameInputForm {...userData} />
      </CardContent>
    </Card>
  )
}
