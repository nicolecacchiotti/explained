import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "explained - AI Design Newsletter",
  description: "A design newsletter exploring AI tools. Discover how teams are using AI to enhance their design projects—one tool at a time.",
  keywords: ["AI", "design", "newsletter", "AI tools", "designers", "Cursor", "Fuel iX"],
  authors: [{ name: "explained Team" }],
  openGraph: {
    title: "explained - AI Design Newsletter",
    description: "Exploring AI tools for designers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
