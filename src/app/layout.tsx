import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maravilla Homes for Sale",
  description: "Find your dream home in Maravilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
