import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function HeroSection() {
  return (
    <section className="w-full text-center py-12 md:py-24 lg:py-32 xl:py-10 space-y-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Secure and Effortless File Sharing
        </h1>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
          <span className="font-semibold underline">Claim your username</span> {" "}
          and send document with your team and clients seamlessly with our powerful file sharing platform.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center  gap-2 min-[400px]:flex-row">
        <Link
          href="#"
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
            size: "lg"
          }))}
          prefetch={false}
        >
          View Pricing
        </Link>
      </div>
      <div className="space-y-2 mx-auto">
        <Label className="text-xl font-bold">
          Claim your user name here
        </Label>
        <Input
          type="text"
          placeholder="Claim your username"
          autoComplete="off"
          className="max-w-[600px] w-[40vw] mx-auto border-2 border-zinc-400 dark:border-zinc-500 rounded-xl"
        />
      </div>
    </section>
  )
}
