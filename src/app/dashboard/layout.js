import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"; // Go up a level since this is inside /dashboard


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard | SiteMagnet",
  description: "Your personal SiteMagnet dashboard for managing websites and leads.",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <main>{children}</main>
      </body>
    </html>
  );
}
