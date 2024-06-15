import type { TLayoutProps } from "@/lib/@types/root.types";


export default function UserLayout({ children }: TLayoutProps) {
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