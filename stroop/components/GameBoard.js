import { useState } from "react";
import { useRouter } from "next/router";
import GameButton from "./GameButton";
import ColorText from "./ColorText";
export default function GameBoard({ failGame, contGame, score }) {
    const router = useRouter();
    // const [gameState, setGameState] = useState(gameState);
    //const [gameColors, setGameColors] = useState([]);
    const [targetColor, setTargetColor] = useState('red');
    const [targetText, setTargetText] = useState('blue');
    //const [score, setScore] = useState(0);

    const gameColors = [
        'red',
        'blue',
        'green',
        'yellow',
        'purple',
        'white'
    ];

    const [randomNumber] = useState(() => Math.floor(Math.random() * gameColors.length));


    const getRandomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }

    function failure(number) {
        failGame(number);
    }

    function notFail(int) {
        contGame(int);
    }

    const checkColor = (event) => {
        const buttonText = event.target.innerText;
        if (buttonText === targetColor) {
            //setScore(score + 1);
            //let number = (Math.random(5));
            //let tempcolor = gameColors.at(number);
            //setGameColors(props.colors);
            //console.log(tempcolor);
            rollTarget();
            notFail(score + 1);

        } else {
            failure(score);
        }
    }

    const rollTarget = () => {
        let tempTarget = getRandomNumber(gameColors.length);
        setTargetColor(gameColors[tempTarget]);
        let tempArray = gameColors;
        tempArray.splice(tempTarget, 1)

        setTargetText(tempArray[getRandomNumber(4)]);
    }

    const getRandomColour = () => {
        return gameColors[randomNumber];
    }
    
    return (
        <div>
            <link href="https://fonts.cdnfonts.com/css/joystix" rel="stylesheet"></link>
            <p style={{ fontSize: "18px" }}>score: {score}</p>
            <ColorText textcolor={targetColor} text={targetText} />
            {/* <GameButton onClick={handleClick} color="red" text="blue"></GameButton> */}
            <ul>
                {
                    gameColors.map((item, index) => (
                        <li key={index}>
                            {score > 6 ? <GameButton click={checkColor} color={getRandomColour()} text={item}></GameButton> : <GameButton click={checkColor} color={item} text={item}></GameButton>}
                        </li>
                    ))
                }
            </ul>
        </div>

    );
}