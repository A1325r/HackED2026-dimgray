import react from 'react';

export default function GameButton({ click, color, bgColor, text }) {

    function handleClick(event) {
        click(event);
    }

    return (
        <div>
            <link href="https://fonts.cdnfonts.com/css/joystix" rel="stylesheet"></link>
            <button className="gameButton" style={{ color: color, backgroundColor: "black", outlineStyle: "solid", outlineColor: color, fontFamily: "joystix", fontSize: "25px", width: "250px"}} onClick={handleClick}>{text}</button>
        </div>
    )
}

