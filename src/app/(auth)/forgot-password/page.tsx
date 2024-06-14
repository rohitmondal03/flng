"use client"

import { useState, type InputHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

import { resetPasswordAction } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ZodIssue } from "zod";


export default function ForgotPasswordPage() {
  const { pending } = useFormStatus();
  const [error, setErrors] = useState<ZodIssue[] | {
    message: string;
  }>()

  // Server action
  const resetPassword = async (formData: FormData) => {
    const userData = {
      userName: formData.get("username"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirm-password"),
    }

    const result = await resetPasswordAction(userData);

    if (result?.error) {
      console.error(result?.error);
      setErrors(result?.error);
      return;
    }

    // console.log("")
  }


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"link"}
          className="text-muted-foreground"
        >
          Forgot Password
        </Button>
      </DialogTrigger>
      <DialogContent>
        {error && (
          <div className="text-red-500">
            Error is there
          </div>
        )}
        <DialogHeader className="text-lg font-bold underline underline-offset-4">
          Change your password
        </DialogHeader>
        <form
          action={resetPassword}
          className="space-y-4"
        >
          <InputWithLabel
            placeholder="Enter your username"
            label="Username"
            name="username"
            id="username"
            type="text"
          />
          <InputWithLabel
            placeholder="Enter new password"
            label="Password"
            name="password"
            id="password"
            type="password"
          />
          <InputWithLabel
            placeholder="Confirm new password"
            label="Confirm password"
            name="confirm-password"
            id="confirm-password"
            type="password"
          />
          <DialogFooter>
            <Button
              type="submit"
              variant={"destructive"}
              disabled={pending}
              className={`${pending ? "opacity-50" : null}`}
            >
              {pending ? "Loading..." : "Change Password"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}



const InputWithLabel = (props: InputHTMLAttributes<HTMLInputElement> & {
  label: string,
  placeholder: string,
}) => {
  return (
    <div className="space-y-1">
      <Label>
        {props.label}
      </Label>
      <Input
        autoComplete="off"
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  )
}
