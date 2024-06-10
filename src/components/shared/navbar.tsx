import Link from "next/link"

import { NAV_LINKS } from "@/lib/config/marketing"
import { ModeToggle } from "../buttons/ThemeToggle"
import { Logo } from "./logo"


export function Navbar() {
  return (
    <header className="px-8 lg:px-10 py-12 h-14 flex items-center">
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
