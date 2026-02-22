import { refresh } from "next/cache";
import Link from "next/link";

// should take in the number of points and time to display
export default function GameOverPage({ displayScore, time, pageUrl }) {
    return (
        <div>
            <link href="https://fonts.cdnfonts.com/css/joystix" rel="stylesheet"></link>
            <p style={{ fontSize: "40px" }}>Game Over</p>
            <p style={{ marginBottom: "50px" }}>You got {displayScore} points in {time} seconds!</p>
            <Link
                onClick={refresh}
                href={pageUrl}
                style={{ outlineStyle: "solid", outlineColor: "white", padding: 10 }}
            >
                Try Again
            </Link>
        </div>
    );
}