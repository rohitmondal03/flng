import Link from "next/link"
import { CloudIcon } from "lucide-react"


export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center space-x-2"
      prefetch={false}
    >
      <CloudIcon className="size-6" />
      <span className="text-lg font-bold">
        fling
      </span>
    </Link>
  )
}
