import "./globals.css";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Nav from "@/components/navbar/nav";
import Navbar from "@/components/navbar/navbar";
import LightRays from "@/components/ui/LightRays";
import ClickSpark from "@/components/ui/ClickSpark";
import { Geist, Geist_Mono, Syne, Noto_Sans, Quintessential, Imperial_Script } from "next/font/google";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" });
const quintessential = Quintessential({ subsets: ["latin"], weight: "400", variable: "--font-quintessential" });
const imperialScript = Imperial_Script({ subsets: ["latin"], weight: "400", variable: "--font-imperial-script" });

export const metadata: Metadata = { title: "Dagmawi Portfolio", description: "My portfolio site" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${imperialScript.variable} ${quintessential.variable} ${geistSans.variable} ${geistMono.variable} ${syne.variable} ${notoSans.variable} mx-auto min-h-screen max-w-6xl`}>
                <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={500}>
                    <div className="fixed top-0 -z-1000 h-150 w-full">
                        <LightRays
                            raysOrigin="top-center"
                            raysColor="#6366f1"
                            raysSpeed={1}
                            lightSpread={1}
                            rayLength={3}
                            followMouse={true}
                            mouseInfluence={0.02}
                            noiseAmount={0}
                            distortion={0}
                            className="custom-rays"
                            pulsating={false}
                            fadeDistance={1}
                            saturation={1}
                        />
                    </div>
                    <Nav />
                    <Navbar />
                    <div>
                        {children}
                        <Toaster />
                    </div>
                </ClickSpark>
            </body>
        </html>
    );
}
