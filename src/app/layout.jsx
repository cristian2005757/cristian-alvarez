import "./globals.css";

export const metadata = {
  title: "Cristian Alvarez | Fullstack Junior · React, Laravel, PostgreSQL",
  description:
    "Desarrollador fullstack junior. React, Next.js, Laravel, PostgreSQL. Interfaces rápidas, APIs con JWT y principios de marketing para conversión. +6 proyectos publicados.",
  openGraph: {
    title: "Cristian Alvarez | Fullstack Junior",
    description: "React · Laravel · PostgreSQL · E-commerce · APIs · Landings orientadas a conversión",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
