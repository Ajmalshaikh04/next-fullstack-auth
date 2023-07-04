import { connect } from "@/DBConfig/dbConfig";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";




export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Credential:{
    //   id: "credential",
    //   name: "Credential",
    //   type: "credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text" },
    //     password: { label: "Password", type: "password" },
    //     name: { label: "Name", type: "text" },
    //     phone: { label: "Phone", type: "text" },

    
  ]
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
