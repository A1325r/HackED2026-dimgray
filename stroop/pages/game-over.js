import Navbar from "@/components/Navbar";
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";

// should take in the number of points and time to display
export default function GameOverPage({displayScore, time}) {
    return (
        <div
            className={`flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
        >
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <link href="https://fonts.cdnfonts.com/css/joystix" rel="stylesheet"></link>
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Game Over</h1>
                </div>
                <p>You got {displayScore} points in {time} seconds!</p>
                <div>
                    <Link
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                        href="/"
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={16}
                            height={16}
                        />
                        Try Again
                    </Link>
                </div>
            </main>
        </div>
    );
}