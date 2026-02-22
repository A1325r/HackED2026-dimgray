import Navbar from "@/components/Navbar";
import GameBoard from "@/components/gameBoard";
import { useState } from "react";
import GameOverPage from "./game-over";

export default function SurvivalMode() {
const [gameState, setGameState] = useState(true);
const [gamesScore, setGameScore] = useState(0);
const [gameTimer, setGameTimer] = useState(6);

const handleFail = (score) => {
    setGameState(false);
    setGameScore(score);
}

const handlePass = () => {
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
            <p>This is survival mode</p>
            <p>{gameTimer}</p>
            {gameState && <GameBoard failGame={handleFail} contGame={handlePass}></GameBoard>}
            {!gameState && <GameOverPage displayScore={gamesScore}></GameOverPage>}
        </div>
    );
}