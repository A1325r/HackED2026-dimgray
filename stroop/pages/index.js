import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <link href="https://fonts.cdnfonts.com/css/joystix" rel="stylesheet"></link>
      <Navbar />
      <h1>Select Game Mode</h1>
      <TimerButton />
      <CountdownButton />
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
      <button className="modeButtons" name="timerButton" onClick={handleTimerClick}>Time Trial</button>
      {isTimerActive === true && <div>
        <p>How many colors can you match in
          67 seconds?  <br /> For every match you get
          wrong, <br /> the timer reduces by 6 seconds!</p>
        <Link href="/time-trial" target="_self">Start</Link>
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
      <button className="modeButtons" name="countdownButton" onClick={handleCountdownClick}>Survival Mode</button>
      {isCountdownActive === true && <div>
        <p>Play until you get the color wrong! <br /> The questions get progressively harder <br /> and the question timer gets shorter as you play.</p>
        <Link href="/survival-mode" target="_self">Start</Link>
      </div>}
    </div>
  );
}
