export default function Points ({prop, answer}) {
    let pointCount;

    if(prop.colour === answer) {
        pointCount++;
    }

    return pointCount;
}