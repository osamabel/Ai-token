import type { Metadata } from "next";
import "./styles/globals.css";
import './styles/fonts.css';

export const metadata: Metadata = {
  title: "blockchain",
  description: "The world's first platform for Tokenizing AI blockchain projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/images/icon.png" /> */}
      <body>{children}</body>
    </html>
  );
}
