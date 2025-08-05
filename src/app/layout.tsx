// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header"; // Importe o Header

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgendaBarber Admin",
  description: "Painel de gestão para barbearias",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="grid min-h-screen w-full md:grid-cols-[256px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <Sidebar />
          </div>
          <div className="flex flex-col">
            <Header />
            <main className="flex-1 p-6 sm:p-8 bg-slate-100">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}