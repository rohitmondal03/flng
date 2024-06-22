"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type InputHTMLAttributes, useState, } from "react";

import { routes } from "@/config/routes";
import { resetPasswordAction } from "@/actions/auth-actions";
import { SubmitButton } from "@/components/buttons/submit-button"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


export default function ForgotPasswordPage() {
  const [error, setErrors] = useState<string[]>();
  const { push: redirect } = useRouter()

  
  // Server action
  const resetPassword = async (formData: FormData) => {
    const userData = {
      userName: formData.get("username"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirm-password"),
    }

    const result = await resetPasswordAction(userData);

    if (result?.error) {
      setErrors(result?.error);
      return;
    } else {
      redirect(routes.signIn())
    }
  }


  return (
    <div className="mx-auto max-w-md space-y-6 py-12 h-full my-auto">
      {/* flex flex-col items-center justify-center */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Forgot Password</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Enter your username below to reset your password and get back on track.
        </p>
      </div>
      <form
        action={resetPassword}
        className="space-y-4"
      >
        {error ? (
          <div className="bg-red-100 dark:bg-red-500 rounded-lg p-3 my-4">
            <h3 className="font-bold text-md">
              Error!
            </h3>
            {error.map((errorMsg, idx) => (
              <p
                key={idx}
                className="text-sm"
              >
                {idx + 1}{". "}{errorMsg}
              </p>
            ))}
          </div>
        ) : null}
        <div className="space-y-1">
          <Label
            htmlFor="username"
            className="font-medium text-muted-foreground"
          >
            User Name
          </Label>
          <Input
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            placeholder="e.g. rohitmondall"
            className="pr-10"
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="email"
            className="font-medium text-muted-foreground"
          >
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter new password"
            className="pr-10"
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="email"
            className="font-medium text-muted-foreground"
          >
            Confirm new Password
          </Label>
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            placeholder="Confirm new Password"
            className="pr-10"
          />
        </div>
        <SubmitButton>
          Reset Password
        </SubmitButton>
      </form>
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        Remember your password?{" "}
        <Link
          href={routes.signIn()}
          className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-800 dark:text-gray-50 dark:hover:text-gray-200"
          prefetch={false}
        >
          Login
        </Link>
      </div>
    </div>
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
