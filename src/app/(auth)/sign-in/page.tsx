import Link from "next/link";
import { cn } from "@/lib/utils";

import { routes } from "@/config/routes";
import AuthForm from "@/components/auth/Form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";


export default function SignInPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[100dvh] bg-gray-100 dark:bg-gray-950">
      <div className="flex items-center justify-center flex-1 px-4 sm:px-6 lg:px-8 h-fit my-auto">
        <div className="mx-auto my-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your username and password to Sign-in
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <AuthForm action="/api/sign-in">
              <div className="space-y-1">
                <Label htmlFor="username">
                  Username
                </Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="e.g. rohitmondall"
                  required
                  autoComplete="off"
                />
                <br />
                <div className="flex items-center justify-between py-0 my-0 h-6">
                  <Label htmlFor="password">
                    Password
                  </Label>
                  <Link
                    href="#"
                    className={cn(buttonVariants({
                      className: "text-sm font-medium text-muted-foreground",
                      // text-gray-900 hover:underline dark:text-gray-50
                      variant: "link",
                    }))}
                    prefetch={false}
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="Enterr your password"
                />
                <br />
              </div>
            </AuthForm>
          </div>
          <div className="text-center text-sm">
            Don&apos;t have an account? {" "}
            <Link
              href={routes.signUp()}
              className={cn(buttonVariants({
                variant: "link",
                className: "font-semibold text-gray-900 hover:underline dark:text-gray-50 px-0"
              }))}
              prefetch={false}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-700 dark:to-purple-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-md space-y-4 text-center text-white">
            <h2 className="text-3xl font-bold">
              Unlock Your Potential
            </h2>
            <p>
              Our platform offers a seamless experience for managing your business and connecting with your customers.
            </p>
            <Button variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}