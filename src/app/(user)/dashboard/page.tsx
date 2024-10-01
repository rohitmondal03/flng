import Link from "next/link"

import { cn } from "@/lib/utils"
import { getUserAuth } from "@/lib/auth/utils"
import { DASHBOARD_NAV_LINKS } from "@/lib/data/dashboard"
import { UserDetails } from "./_components/user-details"
import { ProfileSettings } from "./_components/profile-settings"
import { UsersSharedFilesDetails } from "./_components/users-shared-files-details"
import { UsersReceivedFilesDetails } from "./_components/users-received-files-details"
import { StorageUsageDetails } from "./_components/storage-usage-details"
import SignOutBtn from "@/components/auth/SignOutBtn"
import { buttonVariants } from "@/components/ui/button"


export default async function Component() {
  const auth = await getUserAuth();
  const user = auth.session?.user;
  
  return (
    <div className="w-full min-h-screen flex flex-col pb-5">
      <header className="flex items-center justify-between shadow-sm p-4 sm:py-10 px-4 lg:px-20 w-full">
        <div className="flex items-center gap-24">
          <p className="text-xl sm:text-2xl font-bold">
            <span className="underline underline-offset-4 decoration-2 decoration-slate-500">
              {user?.name || user?.username}&apos;s
            </span> {" "}
            <span className="text-zinc-500">Dashboard</span>
          </p>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {DASHBOARD_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }))}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <SignOutBtn />
      </header>
      <main className="flex-1 grid grid-cols-6 gap-4 lg:gap-8 container mx-auto py-4 md:py-8 lg:py-12 px-4 lg:px-12 bg-gray-300 dark:bg-slate-400 text-gray-900 dark:text-gray-100 rounded-xl">
        <div className="col-span-6 md:col-span-3 h-full">
          <UserDetails />
        </div>
        <div className="col-span-6 md:col-span-3">
          <ProfileSettings />
        </div>
        <div id="storage-details" className="col-span-6">
          <StorageUsageDetails />
        </div>
      </main>
    </div>
  )
}
