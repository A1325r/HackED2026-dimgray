import Navbar from "@/components/Navbar";
import GameBoard from "@/components/gameBoard";
import { useState, useEffect } from "react";
import GameOverPage from "./game-over";
import GameTimer from "../components/gameTimer";
import ProgressTimeBar from "../components/progressTimeBar";

export default function TimeTrial() {
    const [gameState, setGameState] = useState(true);
    const [gamesScore, setGameScore] = useState(0);
    const [gameTimer, setGameTimer] = useState(67);
    const { elapsedTime, progress, secondDur, start } = GameTimer(67); // 67 seconds hahahahahahahah
    const [timeLeft, setTimeLeft] = useState(67); // Timer value
    const [isActive, setIsActive] = useState(false); // To control the timer
    const [deductedTime, setDeductionTime] = useState(0);

    useEffect(() => {
        let timer;

        if (timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);


        } else if (timeLeft <= 0) {
            setGameState(false);
            setTimeLeft(0);
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
            <ProgressTimeBar progress={adjustedProgress} elapsedTime={elapsedTime} secondDur={secondDur} />
            {adjustedProgress >= 100 && <p className="time-up">Time's Up!</p>}
            <p>This is time trial</p>
            <p>{GameTimer}</p>
            <p>{timeLeft}</p>
            {gameState && <GameBoard failGame={handleFail} contGame={handlePass} score={gamesScore}></GameBoard>}
            {!gameState && <GameOverPage displayScore={gamesScore}></GameOverPage>}
        </div>
    );
}