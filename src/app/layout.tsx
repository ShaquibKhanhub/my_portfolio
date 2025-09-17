import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Shaquib Khan - Full-stack Python Developer & AI Engineer | Professional Portfolio",
    template: "%s | Shaquib Khan Portfolio"
  },
  description: "Professional portfolio of Shaquib Khan - Full-stack Python Developer & AI Engineer. Showcasing automation projects, IoT systems, and AI-powered solutions. Available for internships.",
  keywords: [
    "Shaquib Khan",
    "Full-stack Developer", 
    "Python Developer",
    "AI Engineer",
    "Portfolio",
    "Software Developer",
    "Machine Learning",
    "IoT Developer",
    "Web Development",
    "Next.js",
    "React",
    "FastAPI",
    "Django",
    "Automation",
    "LangChain",
    "Hackathon",
    "Freelancer",
    "AI Chatbot",
    "Professional Portfolio",
    "Developer Portfolio",
    "Tech Portfolio",
    "Internship",
    "Python Automation",
    "Web Scraping",
    "API Development"
  ],
  authors: [
    {
      name: "Shaquib Khan",
      url: "https://your-portfolio-url.com", // 🔴 update
    },
  ],
  creator: "Shaquib Khan",
  publisher: "Shaquib Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com", // 🔴 update
    title: "Shaquib Khan - Full-stack Python Developer & AI Engineer | Professional Portfolio",
    description: "Professional portfolio showcasing AI-powered projects, IoT systems, and full-stack development. Available for internships.",
    siteName: "Shaquib Khan Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/portfolio.png", // 🔴 update
        width: 1200,
        height: 630,
        alt: "Shaquib Khan - Professional Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaquib Khan - Full-stack Python Developer & AI Engineer",
    description: "Professional portfolio showcasing AI projects, IoT systems, and automation solutions.",
    creator: "@yourhandle", // 🔴 update
    site: "@yourhandle", // 🔴 update
    images: [
      {
        url: "https://your-portfolio-url.com/portfolio.png", // 🔴 update
        alt: "Shaquib Khan Professional Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico", // ✅ handled automatically by Next.js
    apple: "/apple-touch-icon.png", // optional
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://your-portfolio-url.com", // 🔴 update
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
