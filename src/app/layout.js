import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata = {
  title: "Giulio Leoni",
  description: "My name is Giulio and I'm a game programmer from Italy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
        {children}
      </body>
    </html>
  );
}
