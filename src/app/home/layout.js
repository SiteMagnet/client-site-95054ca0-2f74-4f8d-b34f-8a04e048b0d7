import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navigation from "../components/Navigation";
import content from "../../../content.json";
const seo = content.SEO;
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: seo.title,
  description: seo.description,
  robots: seo.robots, // This ensures that search engines can index your page and follow links
  og: {
    title: seo.openGraph.title, // Open Graph title for social media sharing
    description: seo.openGraph.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
