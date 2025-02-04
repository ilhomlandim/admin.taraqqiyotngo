import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Providers from "./providers";
import LayoutWrapper from "@/components/layoutWrapper";
import Main from "@/components/Main";
import AuthCheck from "@/components/AuthCheck";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taraqqiyot NGO",
  description: "Taraqqiyot NGO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <LayoutWrapper>
              <AuthCheck>{children}</AuthCheck>
            </LayoutWrapper>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
