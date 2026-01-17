import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEDU | Empowering Future through Tech & Education",
  description: "Bridging the gap between learning and industry with innovative software and digital-first curriculum tailored for the next generation of leaders.",
  keywords: ["education", "technology", "edtech", "learning management system", "LMS", "e-learning"],
  authors: [{ name: "TEDU" }],
  openGraph: {
    title: "TEDU | Empowering Future through Tech & Education",
    description: "Innovative EdTech solutions for the next generation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
