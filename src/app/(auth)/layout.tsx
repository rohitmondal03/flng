import { redirect } from "next/navigation";

import type { TLayoutProps } from "@/lib/@types/root.types";
import { routes } from "@/config/routes";
import { getUserAuth } from "@/lib/auth/utils";
import { Toaster } from "@/components/ui/sonner"


export default async function AuthLayout({ children }: TLayoutProps) {
  const { session } = await getUserAuth();
  if (session) redirect(routes.dashboard());

  return (
    <div className="bg-muted h-screen">
      {children}
      <Toaster />
    </div>
  );
}
