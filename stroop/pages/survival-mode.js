import Navbar from "@/components/Navbar";
import GameBoard from "@/components/gameBoard";
import { useState } from "react";
import GameOverPage from "./game-over";

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
            <p>This is survival mode</p>
            {gameState && <GameBoard failGame={handleFail}></GameBoard>}
            {!gameState && <GameOverPage displayScore={gamesScore}></GameOverPage>}
        </div>
    );
}