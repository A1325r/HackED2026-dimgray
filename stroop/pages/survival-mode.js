import Navbar from "@/components/Navbar";
import GameBoard from "@/components/gameBoard";

export default function SurvivalMode() {
    return (
        <div>
            <Navbar />
            <p>This is survival mode</p>
            <GameBoard></GameBoard>
        </div>
    );
}