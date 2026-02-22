import react from 'react';

export default function GameButton({click, color, bgColor, text}) {

    function handleClick(event) {
        click(event);
    }

return (
    <button className="gameButton" style={{color: color, backgroundColor: bgColor}} onClick={handleClick}>{text}</button>
)
}

