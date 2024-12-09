import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: "email" },
        password: { label: 'Password', type: "password" },
      },
      async authorize(credentials) {
        const BASE_API_URL = process.env.ADMIN_API_URL
        const res = await fetch(`${BASE_API_URL}/auth/singin`, {
        method: 'POST',
          body: JSON.stringify(
            {
              email: credentials?.email,
              password: credentials?.password
             }),
        headers: { "Content-Type": "x-www-form-urlencoded" }
        })

      const user = await res.json()

        if (!res.ok || !user) {
          return null
        }
        return user
      },
    })
  ],
  pages: {
    signIn:"/login"
  },
  logger: {
    error(code, metadata) {
      console.error(code, metadata)
    },
    warn(code) {
      console.warn(code)
    },
    debug(code, metadata) {
      console.debug(code, metadata)
    }
  }
}
const handler = NextAuth(authOptions)

export {handler as GET,handler as  POST}