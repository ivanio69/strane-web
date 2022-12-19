import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/auth/mongodb";

export const authOptions = {
  // Set the authentication database
  adapter: MongoDBAdapter(clientPromise),

  // Configure one or more authentication providers (google)
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Secret used to encrypt the JWT token
  secret: process.env.JWT_SECRET,

  callbacks: {
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account && token) {
        token.accToken = account.token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.token = token;
      return session;
    },
  },
  // set custom error page
  pages: {
    error: "/auth/error",
    signIn: "/auth/signin",
    signUp: "/auth/signup",
  },
};
export default NextAuth(authOptions);
