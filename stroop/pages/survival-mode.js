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
    const { elapsedTime, progress, secondDur, start } = GameTimer(67); // 67 seconds hahahahahahahah

    const handleFail = (score) => {
        setGameState(false);
        setGameScore(score);
    }

    // starts timer yt
    useEffect(() => {
        start();
    }, []);

    const handlePass = (number) => {
        setGameScore(number)
        setGameTimer(6);
    }

    const timerId = setInterval(function() {
        setGameTimer(gameTimer - 1)
        if(gameTimer === 0) {
            setGameState(false);
            setGameTimer(0)
        }
    }, 1000);

    // To stop the timer after, say, 5 seconds:
    setTimeout(function() {
        clearInterval(timerId);
    }, 6000);
    return (
        <div>
            <Navbar />
            {/* shows progerss bar */}
            <ProgressTimeBar progress={progress} elapsedTime={elapsedTime} secondDur={secondDur}/>
            {progress >= 100 && <p className="time-up">Time's Up!</p>}
            <p>This is survival mode</p>
            <p>{GameTimer}</p>
            <p>{gameTimer}</p>
            {gameState && <GameBoard failGame={handleFail} contGame={handlePass}></GameBoard>}
            {!gameState && <GameOverPage displayScore={gamesScore}></GameOverPage>}
        </div>
    );
}