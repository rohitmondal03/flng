import { type NextRequest } from "next/server";

import { resetPasswordSchema } from "@/lib/validators/auth-schemas";


export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  const result = resetPasswordSchema.safeParse(formData);

  if (!result.success) {
    let errorMessage = "";
    result.error.format();
    result.error.issues.forEach((issue) => {
      errorMessage += issue.message + ". \n";
    });
    return { error: errorMessage };
  }

  
}