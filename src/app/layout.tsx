import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { FormProvider } from "@/context/form-contenxt";
import { SidebarProvider } from "@/context/sidebar";
import { AuthProvider } from "@/context/auth/provider";
import { Header } from "@/components/header";

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
      <body className={`${inter.className} antialiased bg-gradient-to-r from-[#E4F2FF] to-[#ffff] text-black`}>
        <AuthProvider>
          <FormProvider>
            <SidebarProvider>
                <Header/>
                {children}
            </SidebarProvider>
          </FormProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
