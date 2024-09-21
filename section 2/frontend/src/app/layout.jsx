import { Inter } from "next/font/google";
import "./globals.css";
import Navbars from "@/components/Navbars";
import Footers from "@/components/Footers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: [ "latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbars />
        <Toaster position="top-left" />
        {children}
        <br />
        < Footers />
        </body>
    </html>
  );
}
