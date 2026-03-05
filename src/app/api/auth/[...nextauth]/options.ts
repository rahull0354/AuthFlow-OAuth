import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { compare } from "bcryptjs";

// Extend NextAuth types to include custom fields
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub?: string;
    picture?: string | null;
  }
}

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "text",
          placeholder: "************",
        },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }

        try {
          const user = await db
            .select()
            .from(users)
            .where(eq(users.username, credentials.username))
            .limit(1);

          if (user.length === 0) {
            return null;
          }

          // Check if user has password (GitHub users don't)
          if (!user[0].password) {
            console.error("User registered with GitHub, cannot use credentials login");
            return null;
          }

          const isValidPassword = await compare(
            credentials.password,
            user[0].password,
          );

          if (!isValidPassword) {
            return null;
          }

          return {
            id: user[0].id.toString(),
            name: user[0].username,
            email: user[0].email,
          };
        } catch (error) {
          console.error("Auth Error: ", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        try {
          // Check if user already exists
          const existingUser = await db
            .select()
            .from(users)
            .where(eq(users.githubId, user.id))
            .limit(1);

          if (existingUser.length === 0) {
            // User doesn't exist, create new user from GitHub data
            await db.insert(users).values({
              username: user.name || user.email?.split('@')[0] || 'github_user',
              email: user.email || '',
              githubId: user.id,
            });

            console.log("✅ GitHub user created in database:", user.email);
          } else {
            console.log("ℹ️ GitHub user already exists:", existingUser[0].email);
          }

          return true;
        } catch (error) {
          console.error("❌ Error saving GitHub user to database:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub || '';
        session.user.image = token.picture || undefined;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.picture = user.image;
      }
      return token;
    },
  },
};
