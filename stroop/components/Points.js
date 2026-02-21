export default function Points ({actualColour, userAnswer}) {
    let pointCount;

    if(actualColour === userAnswer) {
        pointCount++;
    }

    return pointCount;
}