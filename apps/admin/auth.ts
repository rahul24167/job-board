import NextAuth, { type NextAuthResult, } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@repo/database";
import Google from "next-auth/providers/google";
import "@repo/types";

const decideUserRole = async (email: string | undefined) => {
  email = email?.toLowerCase();
  if (!email) return "user";
  if (email === process.env.OWNER_EMAIL) return "owner";
  const role = await prisma.user
    .findFirst({
      where: { email },
      select: { role: true },
    })
    .then((user) => user?.role || "user");
  return role;
};

export const result = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      async profile(profile) {
        return {
          role: await decideUserRole(profile.email),
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture || null
        };
      },
    }),
  ],
  
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role || "user";
      return session;
    },
  },
});

export const handlers: NextAuthResult["handlers"] = result.handlers;
export const auth: NextAuthResult["auth"] = result.auth;
export const signIn: NextAuthResult["signIn"] = result.signIn;
export const signOut: NextAuthResult["signOut"] = result.signOut;
