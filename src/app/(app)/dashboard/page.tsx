import { redirect } from "next/navigation";

import { routes } from "@/config/routes";
import { getUserAuth } from "@/lib/auth/utils";
import AuthForm from "@/components/auth/Form";


export default async function DashboardPage() {
  const { session } = await getUserAuth();

  if(!session) redirect(routes.signIn());

  
  return (
    <main className="">
      <h1 className="text-2xl font-bold my-2">Profile</h1>
      <pre className="bg-secondary p-4 rounded-lg my-2">
        {JSON.stringify(session, null, 2)}
      </pre>
      <AuthForm action="/api/sign-out" />
    </main>
  );
}
