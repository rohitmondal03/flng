"use client"

import Link from "next/link"
import { useFormStatus } from "react-dom"
import { type FormEvent, useState } from "react"

import { useAppDispatch, useAppSelector } from "@/lib/hooks/store-hooks"
import { setUsername } from "@/lib/store/slices/username"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function HeroSection() {
  const storedUserName = useAppSelector(state => state.userName);
  const dispatch = useAppDispatch();

  const submitUserName= (e: FormEvent) => {
    e.preventDefault();
    console.log(storedUserName)
  }


  return (
    <section className="w-full text-center py-12 md:py-24 lg:py-32 xl:pt-10 space-y-12">
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
            size: "lg",
            className: "border"
          }))}
          prefetch={false}
        >
          View Pricing
        </Link>
      </div>
      <form 
      onSubmit={submitUserName}
      className="space-y-3 mx-auto">
        <Label
          htmlFor="username"
          className="text-xl font-bold text-zinc-400"
        >
          Claim your {" "}
          <span className="text-zinc-500 dark:text-white underline underline-offset-4">Username</span>
          {" "} here !
        </Label>
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Claim your username"
            name="username"
            id="username"
            className="max-w-[500px] w-[40vw] mx-auto border-2"
            autoComplete="off"
            value={storedUserName}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <Button
            type="submit"
            variant={"default"}
            className="w-[10%]"
          >
            Claim
          </Button>
        </div>
      </form>
    </section>
  )
}
