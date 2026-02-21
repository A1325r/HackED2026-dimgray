export default function GameButton(props) {


return (
    <button style={{color: props.color, backgroundColor: props.backgroundColor, borderColor: props.borderColor}}>{props.text}</button>
)
}

