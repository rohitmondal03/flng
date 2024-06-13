"use client"

import { type InputHTMLAttributes, useActionState } from "react";
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


export function ChangePasswordDialog() {
  

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
        <DialogHeader className="text-lg font-bold underline underline-offset-4">
          Change your password
        </DialogHeader>
        <form
          action={resetPasswordAction}
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
            >
              Reset Password
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
        required
        placeholder={props.placeholder}
      />
    </div>
  )
}
