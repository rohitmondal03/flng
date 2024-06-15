import type { TLayoutProps } from "@/lib/@types/root.types";


export default function HomeLayout({ children }: TLayoutProps) {
  // await checkAuth();
  return (
    <section>
      <div className="flex">
        <section className="flex-1 pt-2 md:py-8">
          {children}
        </section>
      </div>
      {/* <Toaster richColors /> */}
    </section>
  )
}