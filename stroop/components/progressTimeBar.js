const ProgressTimeBar = ({ progress, elapsedTime, secondDur }) => {
    let progressColour;
    // changes  colour based off percentage
    if (progress < 50) {
        progressColour = 'cyan';
    } else if (progress > 75) {
        progressColour = 'red';
    } else {
        progressColour = 'orange';
    }

    const countdown = secondDur - elapsedTime;
    const secs = Math.floor(countdown);
    const milisecs = Math.floor((countdown % 1) * 100);

return (
    <div style={{
        width: '50vw', // 50% of screen width
        margin: '0 auto', //centred
        backgroundColor: '#e2e2e2',
        borderRadius: '5px',
        overflow: 'hidden',
        position: 'relative'
    }}>
    <div style={{
        height: '20px',
        width: `${progress}%`,
        backgroundColor: progressColour,
        transition: 'width 0.05s linear, background-color 0.5s linear', // smooth bar transition (aka when they move)
        borderRadius: '4px',
    }}/>
        <div
            style={{
            position: 'absolute',
            top: '50%',
            left: `${progress}%`,
            transform: 'translate(-100%, -50%)',
            color: 'black',
            transition: 'left 0.05s linear',
            padding: '0 10px'
            }}
        >
            {secs}.{milisecs.toString().padStart(2, "0")}s
        </div>
    </div>
    );
};

export default ProgressTimeBar;