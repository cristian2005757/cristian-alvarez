import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LangWrapper from "@/components/LangWrapper";

export const metadata = {
  title: "Cristian Alvarez | Full-Stack Developer (React · Laravel · PostgreSQL)",
  description:
    "Desarrollador fullstack junior. React, Next.js, Laravel, PostgreSQL. Interfaces rápidas, APIs con JWT y principios de marketing para conversión. +6 proyectos publicados.",
  openGraph: {
    title: "Cristian Alvarez | Full-Stack Developer",
    description: "React · Laravel · PostgreSQL · E-commerce · APIs · Landings orientadas a conversión",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <LanguageProvider>
          <LangWrapper>{children}</LangWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
