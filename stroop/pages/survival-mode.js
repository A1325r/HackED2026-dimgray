import Navbar from "@/components/Navbar";
import GameBoard from "@/components/GameBoard";
import GameTimer from "@/components/GameTimer";
import ProgressTimeBar from "@/components/ProgressTimeBar";
import GameOverPage from "./game-over";
import { useState, useEffect } from "react";

export default function SurvivalMode() {
    const [gameState, setGameState] = useState(true);
    const [gamesScore, setGameScore] = useState(0);
    const [gameTimer, setGameTimer] = useState(6);
    const { elapsedTime, reset, secondDur, start } = GameTimer(6); // 67 seconds hahahahahahahah
    const [timeLeft, setTimeLeft] = useState(6); // Timer value
    const [isActive, setIsActive] = useState(false); // To control the timer
    const [deductedTime, setDeductedTime] = useState(0);
    const [time, setTime] = useState(0);
    // state to check whether the rounds still going or not
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setTime(time + 1), 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    useEffect(() => {
        let timer;

        if (timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);


        } else if (timeLeft === 0) {
            setGameState(false);
            setIsRunning(false);
        }

        return () => clearTimeout(timer); // Cleanup the timer

    }, [timeLeft, isActive]);


    const handleFail = (score) => {
        setGameState(false);
        setGameScore(score);
        setTimeLeft(0);
        setDeductedTime(prev => prev + 6);
    }

    // starts timer yt
    useEffect(() => {
        start();
    }, []);

    const handlePass = (number) => {
        setGameScore(number)
        setTimeLeft(6);
        reset();
        start();
        setDeductedTime(0);
    }
    const adjustedProgress = Math.min(((elapsedTime + deductedTime) / secondDur) * 100, 100);

    
    return (
        <div>
            <Navbar />
            <link href="https://fonts.cdnfonts.com/css/joystix" rel="stylesheet"></link>
            {/* shows progerss bar */}
            <ProgressTimeBar progress={adjustedProgress} elapsedTime={elapsedTime} secondDur={secondDur} />
            {adjustedProgress >= 100 && <p className="time-up">Time&apos;s Up!</p>}
            <p>{GameTimer}</p>
            <p>{timeLeft == 0 ? null : timeLeft}</p>
            {gameState && <GameBoard failGame={handleFail} contGame={handlePass} score={gamesScore}></GameBoard>}
            {!gameState && <GameOverPage displayScore={gamesScore} time={time} pageUrl="/survival-mode"></GameOverPage>}
        </div>
    );
}