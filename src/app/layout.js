import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";

const roboto = Roboto({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata = {
  title: "First Next App",
  description: "This is my home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
