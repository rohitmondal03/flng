"use client"

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

import { TUserSchema } from "@/lib/@types/prisma-schema.types";
import { addUsersNameAndEmail as updateUsersDetails } from "@/actions/users.action";
import { SubmitButton } from "@/components/buttons/submit-button";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


type TProps = TUserSchema

export function EmailAndNameInputForm(props: TProps) {
  const [error, setErrors] = useState<string[]>([]);
  const { toast } = useToast();

  // update user's name and email action
  const updateUsersEmailAndName = async (formData: FormData) => {
    const userData = {
      email: formData.get("email"),
      name: formData.get("name"),
    }

    const result = await updateUsersDetails(userData);

    if (result?.error) {
      setErrors(result.error)
      toast({
        title: "Error",
        description: result.error.join(". ")
      })
    } else {
      toast({
        title: "Success",
        description: "Your details have been updated successfully."
      })
    }
  }


  return (
    <form
      action={updateUsersEmailAndName}
      className="grid gap-4"
    >
      <div>
        <Label htmlFor="name">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          autoComplete="off"
          placeholder="Please enter your name..."
          defaultValue={props?.name || ""}
        />
      </div>
      <div>
        <Label htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          autoComplete="off"
          placeholder="Please enter E-Mail..."
          defaultValue={props?.email || ""}
        />
      </div>
      <SubmitButton variant={"default"}>
        Update Details
      </SubmitButton>
    </form>
  )
}
