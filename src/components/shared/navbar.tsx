import Link from "next/link"

import { NAV_LINKS } from "@/config/marketing"
import { ModeToggle } from "../buttons/ThemeToggle"
import { Logo } from "./logo"
import { routes } from "@/config/routes"
import { getUserAuth } from "@/lib/auth/utils"


export function Navbar() {
  return (
    <header className={`px-8 lg:px-10 py-10 h-14 flex items-center `}>
      <Logo />
      <nav className="ml-auto flex items-center justify-center gap-4 sm:gap-10">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {label}
          </Link>
        ))}
        <ModeToggle />
      </nav>
    </header>
  )
}
