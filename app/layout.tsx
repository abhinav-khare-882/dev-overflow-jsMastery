import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import React from "react";
import "./globals.css"; // Adjust the path as needed

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "DevOverflow",
  description: "A community-driven platform for asking and answering programming questions...",
  icons: {
    icon: "/public/assets/images/site-logo.svg", // Corrected the property name
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClerkProvider
        appearance={{
          elements: {
            forrmButtonPrimary: "primary-gradient",
            footerActionLink: "primary-text-gradient hover:text-primary-500",
          },
        }}
      >
        <body className={`${inter.variable} ${spaceGrotesk}`}>{children}</body>
      </ClerkProvider>
    </>
  );
}
