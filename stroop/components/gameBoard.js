import { useState } from "react";
import GameButton from "./gamebutton";
import { useRouter } from "next/router";
import ColorText from "./ColorText";
export default function GameBoard(props) {
const router = useRouter();
const [gameState, setGameState] = useState();
//const [gameColors, setGameColors] = useState([]);
const [targetColor, setTargetColor] = useState('red');
const [targetText, setTargetText] = useState('blue');
const [score, setScore] = useState(0);

const gameColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'white'
];

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

const checkColor = (event) => {
    const buttonText = event.target.innerText;
    if(buttonText === targetColor) {
        setScore(score + 1);
        //let number = (Math.random(5));
        //let tempcolor = gameColors.at(number);
        //setGameColors(props.colors);
        //console.log(tempcolor);
        rollTarget();
        
    } else {
        router.push("../game-over")
    }
}

const rollTarget = () => {
     setTargetColor(gameColors[getRandomNumber(5)]);
     setTargetText(gameColors[getRandomNumber(5)]);

     while (targetColor === targetText) {
        setTargetText(gameColors[getRandomNumber(5)]);
     }
}

return ( 
    <div>
        <ColorText textcolor={targetColor} text={targetText}/>
        <p style={{color: targetColor}}>{score}</p>
        {/* <GameButton onClick={handleClick} color="red" text="blue"></GameButton> */}
    <ul>
        {
            gameColors.map((item, index) => (
                <li key={index}>
                     <GameButton click={checkColor} color={item} text={item}></GameButton>  
                </li>
            ))
        }
    </ul>
    </div>
    
);
}