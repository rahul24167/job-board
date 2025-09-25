// auth.config.ts (Edge-compatible)
import Google from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [Google],
  // Other Edge-compatible configurations
} satisfies NextAuthConfig;