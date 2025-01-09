// "use client"

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "./ThemeProvider";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import Header from "@/components/header";
import NextProgressClient from "@/components/nextprogress-client";
import { Toaster } from "@/components/ui/sonner"
// import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Home from "./page";
import prisma from "./db";

// import ThemeToggleButton from "@/components/ThemeToggleButton";
// import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urban Consultants",
  description: "Generated by create next app",

};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;

}) {

  // const { isAuthenticated } = getKindeServerSession()

  // const isUserAuthenticated = await isAuthenticated();

  // const { getUser } = getKindeServerSession();
  // const user = await getUser();



  // console.log(user);
  // console.log("user?.email");
  // console.log();

  // let results: any;

  // if (user?.email !== undefined) {
  //   const results = await prisma.user.findUnique({

  //     where: {
  //       email: user.email || undefined
  //     },
  //   });

  // } else {
  //   const results = 0;
  // }

  // console.log("layout results")
  // console.log(results)
  // console.log(results?.email)

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // style={{ minWidth: "1000px" }} className={`$(inter.className) bg-white text-black font-semibold container mx-auto p-4 `}
        style={{ minWidth: "1000px" }}
        className={`$(inter.className) `}
      >
        <div className="container text-primary font-semibold mx-auto p-4">
          <NextProgressClient />

          <ThemeProvider attribute="class">


            {/* {(!isUserAuthenticated && results) ? ( */}
            {/* {(!isUserAuthenticated) ? (

              <Home />
            ) : (
              <>
                <Header email={user?.email} />
                <main className="container mx-auto">{children}</main>
                <Toaster position="bottom-right" />
              </>
            )} */}

            <>
              <Header/>
              <main className="container mx-auto">{children}</main>
              <Toaster position="bottom-right" />
            </>





          </ThemeProvider>




        </div>

      </body>
    </html>
  );
}
