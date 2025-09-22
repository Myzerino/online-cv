import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["cyrillic"],
});


export const metadata: Metadata = {
  title: "Márcio Sousa - Online CV",
  description: "A personal online CV built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelifySans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
