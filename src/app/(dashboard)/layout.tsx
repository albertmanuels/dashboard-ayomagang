import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "@/app/globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";
import NextAuthProvider from "@/context/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

import { ToastProvider } from "@/components/ui/toast";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayomagang",
  description: "Internship platform",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (session === null) {
    return redirect("/auth/signin");
  }

  return (
    <html lang="en">
      <body className={epilogue.className}>
        <main>
          <NextAuthProvider>
            <ToastProvider>
              <div className="border-t">
                <div className="bg-background">
                  <div className="flex flex-row">
                    <div className="hidden lg:block w-[18%]">
                      <Sidebar />
                    </div>
                    <div className="col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%]">
                      <div className="p-6 lg:px-8">
                        <Header />
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Toaster />
            </ToastProvider>
          </NextAuthProvider>
        </main>
      </body>
    </html>
  );
}
