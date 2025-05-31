import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "~/context/ThemeContext";
import Footer from "~/components/homepage/Footer";
import Header from "~/components/Header";

export const metadata: Metadata = {
  title: "Pomodo.io",
  description: "Your personal productivity companion",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <div className="bg-[#7a9bc7]">
          <Header />
          <ThemeProvider>
            <div className="min-h-[calc(100vh-106px)]">
              {children}
            </div>
        </ThemeProvider>
        <Footer />
        </div>
      </body>
    </html>
  );
}
