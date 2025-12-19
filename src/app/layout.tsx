import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"

export const metadata: Metadata = {
  title: "Gameboxd",
  description: "Share the games you love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Gameboxd</title>
      </head>
      <body className="page-body">
        <Banner />
        <Navbar />
        <main className="page-main">{children}</main>

        <footer className="page-footer">© Gameboxd</footer>
      </body>
    </html>
  );
}
