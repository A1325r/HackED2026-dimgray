const ProgressTimeBar = ({ progress }) => {
    let progressColour;
    // changes  colour based off percentage
    if (progress < 50) {
        progressColour = 'cyan';
    } else if (progress > 75) {
        progressColour = 'red';
    } else {
        progressColour = 'orange';
    }

return (
    <div style={{
        width: '50vw', // 50% of screen width
        margin: '0 auto', //centred
        backgroundColor: '#e2e2e2',
        borderRadius: '5px'
    }}>
    <div style={{
        height: '20px',
        width: `${progress}%`,
        backgroundColor: progressColour,
        transition: 'width 0.05s linear, background-color 0.5s linear', // smooth bar transition (aka when they move)
        borderRadius: '4px',
    }}/>
    </div>
    );
};

export default ProgressTimeBar;