import { useState } from "react";
import GameButton from "./gamebutton";

export default function GameBoard(props) {
const [gameState, setGameState] = useState();
//const [gameColors, setGameColors] = useState([]);
const [targetColor, setTargetColor] = useState('red');
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
        setTargetColor(gameColors[getRandomNumber(5)]);
    }
}


return ( 
    <div>
        <p style={{color: targetColor}}>{targetColor}</p>
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