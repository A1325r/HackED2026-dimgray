import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={'flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <link href="https://fonts.cdnfonts.com/css/joystix" rel="stylesheet"></link>
        <Navbar />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Select Game Mode</h1>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <TimerButton />
          <CountdownButton />
        </div>
      </main>
    </div>
  );
}



function TimerButton() {

  const [isTimerActive, setIsTimerActive] = useState(false);

  const handleTimerClick = async () => {
    setIsTimerActive((prevState) => (prevState === false ? true : false));
    console.log('clicked');
  }

  return (
    <div>
      <button class="modeButtons" name="timerButton" onClick={handleTimerClick}>Time Trial</button>
      {isTimerActive === true && <div>
        <p>How many colors can you match in
          67 seconds?  <br /> For every match you get
          wrong, <br /> the timer reduces 6-7 seconds!</p>
        <Link
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="/time-trial"
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
          Start Time Trial
        </Link>
      </div>}
    </div>
  );
}

function CountdownButton() {

  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const handleCountdownClick = async () => {
    setIsCountdownActive((prevState) => (prevState === false ? true : false));
    console.log('clicked');
  }

  return (
    <div>
      <button class="modeButtons" name="countdownButton" onClick={handleCountdownClick}>Survival Mode</button>
      {isCountdownActive === true && <div>
        <p>Play until you get the color wrong! <br /> The questions get progressively harder <br /> and the question timer gets shorter as you play.</p>
        <Link
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="/survival-mode"
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
          Start Survival Mode
        </Link>
      </div>}
    </div>
  );
}
