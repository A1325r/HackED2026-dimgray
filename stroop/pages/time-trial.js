import Navbar from "@/components/Navbar";
import GameBoard from "@/components/GameBoard";
import GameTimer from "@/components/GameTimer";
import ProgressTimeBar from "@/components/ProgressTimeBar";
import GameOverPage from "./game-over";
import { useState, useEffect } from "react";

export default function TimeTrial() {
    const [gameState, setGameState] = useState(true);
    const [gamesScore, setGameScore] = useState(0);
    const [gameTimer, setGameTimer] = useState(67);
    const { elapsedTime, progress, secondDur, start } = GameTimer(67); // 67 seconds hahahahahahahah
    const [timeLeft, setTimeLeft] = useState(67); // Timer value
    const [isActive, setIsActive] = useState(false); // To control the timer
    const [deductedTime, setDeductionTime] = useState(0);
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


        } else if (timeLeft <= 0) {
            setGameState(false);
            setTimeLeft(0);
            setIsRunning(false);
        }

        return () => clearTimeout(timer); // Cleanup the timer

    }, [timeLeft, isActive]);


    const handleFail = () => {
        setTimeLeft((prevTime) => prevTime - 6);
        setDeductionTime(prev => prev + 6);
    }

    // starts timer yt
    useEffect(() => {
        start();
    }, []);

    const handlePass = (number) => {
        setGameScore(number);
    };

    const adjustedProgress = Math.min(((elapsedTime + deductedTime) / secondDur) * 100, 100);

    return (
        <div>
            <Navbar />
            {/* shows progerss bar */}
            <link href="https://fonts.cdnfonts.com/css/joystix" rel="stylesheet"></link>
            <ProgressTimeBar progress={adjustedProgress} elapsedTime={elapsedTime} secondDur={secondDur} />
            {adjustedProgress >= 100 && <p className="time-up">Time&apos;s Up!</p>}
            <p>{GameTimer}</p>
            <p>{timeLeft}</p>
            {gameState && <GameBoard failGame={handleFail} contGame={handlePass} score={gamesScore}></GameBoard>}
            {!gameState && <GameOverPage displayScore={gamesScore} time={time}></GameOverPage>}
        </div>
    );
}