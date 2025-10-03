import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["cyrillic"],
});


export const metadata: Metadata = {
  title: "Márcio Sousa - A full-stack developer... at least when I have coffee",
  description: "A personal online CV built with Next.js and Tailwind CSS.",
  keywords: ["Márcio Sousa", "Full-stack developer", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Márcio Sousa" }],
  openGraph: {
    title: "Márcio Sousa - Full-stack Developer",
    description: "A personal online CV built with Next.js and Tailwind CSS.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Márcio Sousa - Full-stack Developer",
    description: "A personal online CV built with Next.js and Tailwind CSS.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#463428",
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
