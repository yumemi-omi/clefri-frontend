import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    token: string | null
    user: User
  }


  interface User extends DefaultUser {
    id?: string | null
  }
}
