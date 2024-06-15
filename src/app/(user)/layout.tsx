import type { TLayoutProps } from "@/lib/@types/root.types";
import { checkAuth } from "@/lib/auth/utils";


export default async function UserLayout({ children }: TLayoutProps) {
  await checkAuth();

  return (
    <section>
      <div className="flex">
        <section className="flex-1 pt-2">
        {/* md:p-8 p-8 */}
          {children}
        </section>
      </div>
    </section>
  )
}