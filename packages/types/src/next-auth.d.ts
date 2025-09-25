export {};

import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & { role?: string };
  }
}
declare module "next-auth/jwt" {
  interface JWT { role?: string }
}
