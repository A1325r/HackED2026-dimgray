import Navbar from "@/components/Navbar";

export default function GameOverPage() {
    return (
        <div className="homeScreenButtons">
            <Navbar />
            <div className='typing-container'><h1>Game Over</h1></div>
            <p>You got ${ } points in ${ }!</p>
            <div className='homeScreenButtons'>
                <RestartButton />
                <ModeButton />
            </div>
        </div>
    );
}

function RestartButton() {
    return (
        <button class name="restartButton">Try Again</button>
    );
}

function ModeButton() {
    return (
        <button class name="modeButton">Change Game Mode</button>
    );
}