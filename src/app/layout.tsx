import "./globals.css";

import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import TopBar from "@/components/sections/top-bar";
import TopBarProvider from "@/components/top-bar-provider";
import ClickSpark from "@/components/ui/click-spark";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Imperial_Script, Noto_Sans, Quintessential, Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" });
const quintessential = Quintessential({ subsets: ["latin"], weight: "400", variable: "--font-quintessential" });
const imperialScript = Imperial_Script({ subsets: ["latin"], weight: "400", variable: "--font-imperial-script" });

export const metadata: Metadata = {
    title: "Dagmawi Solomon | Full Stack Developer",
    description: "Full Stack Developer focused on building modern, scalable web applications with Next.js, TypeScript, and Supabase.",
    keywords: ["Dagmawi Solomon", "Full Stack Developer", "Next.js", "TypeScript", "React", "Supabase", "Web Developer", "Software Engineer", "Bookly"],
    authors: [
        {
            name: "Dagmawi Solomon",
        },
    ],
    openGraph: {
        title: "Dagmawi Solomon | Full Stack Developer",
        description: "Explore my projects, skills, and software engineering journey.",
        type: "website",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen",
                    syne.variable,
                    notoSans.variable,
                    geistSans.variable,
                    geistMono.variable,
                    imperialScript.variable,
                    quintessential.variable,
                )}
            >
                <TopBarProvider>
                    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={500}>
                        <Navbar />
                        <TopBar />
                        <div className="mx-auto max-w-6xl">{children}</div>
                        <Footer />
                    </ClickSpark>
                </TopBarProvider>
            </body>
        </html>
    );
}
