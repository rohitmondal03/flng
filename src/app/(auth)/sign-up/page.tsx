import Link from "next/link";

import { cn } from "@/lib/utils";
import { routes } from "@/config/routes";
import AuthForm from "@/components/auth/Form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants, Button } from "@/components/ui/button";


export default function SignInPage() {
  return (
    <div className="flex min-h-[100dvh] bg-gray-100 dark:bg-gray-950">
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
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-0">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">
              Create your account
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign-up to start sharing files with your team and clients.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <AuthForm action="/api/sign-up">
              <Label htmlFor="username" className="text-muted-foreground">
                Username
              </Label>
              <Input
                autoComplete="off"
                name="username"
                id="username"
                placeholder="Enter your preferred username"
              />
              <br />
              <Label htmlFor="password" className="text-muted-foreground">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
              <br />
              <Label htmlFor="password" className="text-muted-foreground">
                Confirm Password
              </Label>
              <Input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm your password"
              />
              <br />
            </AuthForm>
          </div>
          <div className="text-center text-sm">
            Already have an account? {" "}
            <Link
              href={routes.signIn()}
              className={cn(buttonVariants({
                variant: "link",
                className: "font-semibold text-gray-900 hover:underline dark:text-gray-50 px-0"
              }))}
              prefetch={false}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}