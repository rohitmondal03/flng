"use client"

import { type HTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "../ui/button"


type TProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
}

export function SubmitButton(props: TProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant={props.variant ? props.variant : "destructive"}
      className={`
        w-full
        ${props.className}
      `}
    >
      {pending ? "Wait.." : props.children}
    </Button>
  )
}