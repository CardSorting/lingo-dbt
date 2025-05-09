import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { NextAuthProvider } from "@/components/layouts/auth-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Lingo-DBT - Dialectical Behavior Therapy Training",
  description: "Learn DBT skills through interactive exercises and gamified learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lingodbt">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
