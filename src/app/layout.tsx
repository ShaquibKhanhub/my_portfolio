import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Shaquib Khan - Front-End Developer | Mern Stack | Professional Portfolio",
    template: "%s | Shaquib Khan Portfolio",
  },
  description:
    "Professional portfolio of Shaquib Khan – Front-End Developer & MERN Stack Enthusiast. Showcasing modern web applications, UI designs, and real-world projects. Open to internships and freelance opportunities.",
  keywords: [
    "Shaquib Khan",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer India",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Responsive Web Design",
    "UI Developer",
    "Frontend Engineer",
    "Web Applications",
    "Freelancer",
    "Internship",
    "Professional Portfolio",
    "Developer Portfolio",
    "Tech Portfolio",
    "API Integration",
    "Shaquib Portfolio",
  ],

  authors: [
    {
      name: "Shaquib Khan",
      url: "https://shaquib-dev.vercel.app/", // 🔴 update
    },
  ],
  creator: "Shaquib Khan",
  publisher: "Shaquib Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shaquib-dev.vercel.app/", // 🔴 update
    title:
      "Shaquib Khan – Front-End Developer & MERN Stack Enthusiast | Professional Portfolio",
    description:
      "Professional portfolio showcasing MERN stack projects, responsive designs, and modern web applications.",
    siteName: "Shaquib Khan Portfolio",
    images: [
      {
        url: "https://shaquib-dev.vercel.app/portfolio.png", // 🔴 update
        width: 1200,
        height: 630,
        alt: "Shaquib Khan - Professional Portfolio ",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaquib Khan - Frontend Developer & MERN Stack Enthusiast",
    description:
      "Portfolio showcasing modern web applications, responsive UI designs, and MERN stack projects. Open to internships and freelance opportunities.",

    creator: "@shaquib_khann", // 🔴 update
    site: "@shaquib_khann", // 🔴 update
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col relative">
            <div className="absolute top-4 right-4  z-9999">
              <ThemeToggle />
            </div>

            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
