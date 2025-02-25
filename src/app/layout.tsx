import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/context/form-contenxt";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Fronty Leads - Fronty Digital",
  description: "Fronty Leads - Fronty Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} antialiased text-black`}
      >
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  );
}
