import Link from "next/link"

import { routes } from "@/config/routes"
import { getUserAuth } from "@/lib/auth/utils"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"


export async function HeroSection() {
  const session = await getUserAuth();

  return (
    <section className="w-full text-center py-12 md:py-24 lg:py-32 xl:pt-24 px-2 md:px-0 space-y-12">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Secure and Effortless File Sharing
        </h1>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
          <span className="font-semibold underline underline-offset-4 text-black dark:text-zinc-200">Claim your username</span> {" "}
          and send document with your team and clients seamlessly with our powerful file sharing platform.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 min-[400px]:flex-row">
        <Link
          href={session ? routes.dashboard() : routes.signIn()}
          className={cn(buttonVariants({
            variant: "default",
            size: "lg"
          }))}
          prefetch={false}
        >
          Get Started
        </Link>
        <Link
          href="#pricing"
          className={cn(buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "border"
          }))}
          prefetch={false}
        >
          View Pricing
        </Link>
      </div>
    </section>
  )
}
