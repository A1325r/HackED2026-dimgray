import react from 'react';

export default function GameButton({click, color, text}) {

    function handleClick(event) {
        click(event);
    }

return (
    <button style={{color: color}} onClick={handleClick}>{text}</button>
)
}

