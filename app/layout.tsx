import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ChatWidget from "@/components/chat/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Online Courses - Learn Anything, On Your Schedule | Udemy",
  description: "Udemy is an online learning and teaching marketplace with over 213,000 courses and 62 million students. Learn programming, marketing, data science and more.",
  keywords: "Udemy, online courses, learning, teaching, skills, development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${merriweather.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
