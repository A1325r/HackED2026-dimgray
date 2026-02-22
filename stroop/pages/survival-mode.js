import Navbar from "@/components/Navbar";
import GameBoard from "@/components/gameBoard";
import { useState, useEffect } from "react";
import GameOverPage from "./game-over";
import GameTimer from "../components/gameTimer";
import ProgressTimeBar from "../components/progressTimeBar";

export default function SurvivalMode() {
const [gameState, setGameState] = useState(true);
const [gamesScore, setGameScore] = useState(0);

const handleFail = (score) => {
    setGameState(false);
    setGameScore(score);
}
    return (
        <div>
            <Navbar />
            {/* shows progerss bar */}
            <ProgressTimeBar progress={progress} elapsedTime={elapsedTime} duration={secondDur}/>
            {progress >= 100 && <p className="time-up">Time's Up!</p>}
            <p>This is survival mode</p>
            <p>{gameTimer}</p>
            {gameState && <GameBoard failGame={handleFail} contGame={handlePass}></GameBoard>}
            {!gameState && <GameOverPage displayScore={gamesScore}></GameOverPage>}
        </div>
    );
}