import prisma from "@/lib/prisma"
import { comparePassword } from "@/lib/utils"
import NextAuth, { NextAuthOptions, Session } from "next-auth"
import { JWT } from "next-auth/jwt"
import Credentials from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email"
        },
        password: {
          label :"password",
          type: "password"
        }
      },
      async authorize(credentials) {
        const user = await prisma.company.findFirst({
          where: {
            email: credentials?.email
          }
        })

        if(!user) {
          return null
        }

        const isMatch = await comparePassword(credentials?.password!!, user.password)

        if(isMatch) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup"
  },
  callbacks: {
    async jwt({token, account, user}) {

      if(account) {
        token.id = user.id
      }

      return token
    },
    async session({session, token}: {session: Session, token: JWT}) {
      session.user.id = token.id
      
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export {
  handler as GET,
  handler as POST
}