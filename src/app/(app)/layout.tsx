import type { TLayoutProps } from "@/lib/@types/root.types";
import { checkAuth } from "@/lib/auth/utils";
import { Toaster } from "@/components/ui/sonner";


export default async function AppLayout({ children }: TLayoutProps) {
  // await checkAuth();
  return (
    <section>
      <div className="flex">
        <section className="flex-1 md:p-8 pt-2 p-8">
          {children}
        </section>
      </div>
      {/* <Toaster richColors /> */}
    </section>
  )
}