import Navbar from "@/components/Navbar";
import GameBoard from "@/components/gameBoard";
import { useState, useEffect } from "react";
import GameOverPage from "./game-over";
import GameTimer from "../components/gameTimer";
import ProgressTimeBar from "../components/progressTimeBar";

export default function SurvivalMode() {
    const [gameState, setGameState] = useState(true);
    const [gamesScore, setGameScore] = useState(0);
    const [gameTimer, setGameTimer] = useState(6);
    const { elapsedTime, progress, secondDur, start } = GameTimer(6); // 67 seconds hahahahahahahah
    const [timeLeft, setTimeLeft] = useState(6); // Timer value
    const [isActive, setIsActive] = useState(false); // To control the timer
    const [deductedTime, setDeductedTime] = useState(0);

    useEffect(() => {
        let timer;

        if (timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);


        } else if (timeLeft === 0) {
            setGameState(false);
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
        setDeductedTime(prev => prev + 6);
    }
    const adjustedProgress = Math.min(((elapsedTime + deductedTime) / secondDur) * 100, 100);

    
    return (
        <div>
            <Navbar />
            {/* shows progerss bar */}
            <ProgressTimeBar progress={adjustedProgress} elapsedTime={elapsedTime} secondDur={secondDur} />
            {adjustedProgress >= 100 && <p className="time-up">Time&apos;s Up!</p>}
            <p>This is survival mode</p>
            <p>{GameTimer}</p>
            <p>{timeLeft}</p>
            {gameState && <GameBoard failGame={handleFail} contGame={handlePass} score={gamesScore}></GameBoard>}
            {!gameState && <GameOverPage displayScore={gamesScore}></GameOverPage>}
        </div>
    );
}