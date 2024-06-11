import { lucia } from "lucia";
import * as context from "next/headers";
import { cache } from "react";
import { nextjs_future } from "lucia/middleware";

import { prisma } from "@lucia-auth/adapter-prisma";
import { db } from "@/lib/db/index";


export const auth = lucia({
  adapter: prisma(db),
  env: "DEV",
  middleware: nextjs_future(),
  sessionCookie: { expires: false },
  getUserAttributes: (data) => {
    return {
      username: data.username,
      email: data.email,
      name: data.name,
    };
  },
});

export type Auth = typeof auth;

export const getPageSession = cache(() => {
  const authRequest = auth.handleRequest("GET", context);
  return authRequest.validate();
});

