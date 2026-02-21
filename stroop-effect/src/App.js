import './App.css';
import './gamebutton'
import GameButton from './gamebutton';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <div className='homeScreenButtons'>
        <div className='typing-container'><h1>Select Game Mode</h1></div>
        <TimerButton />
        <CountdownButton />
      </div>
    </div>
  );
}

function TimerButton() {

  const [isTimerActive, setIsTimerActive] = useState(false);

  const handleTimerClick = async () => {
    setIsTimerActive((prevState) => (prevState === false ? true : false));
    console.log('clicked');
  }

  return (
    <div>
      <button class name="timerButton" onClick={handleTimerClick}>Time Trial</button>
      {isTimerActive === true && <p>How many colors can you match in
        67 seconds?  <br /> For every match you get
        wrong, <br /> the timer reduces 6-7 seconds!</p>}
    </div>
  );
}

function CountdownButton() {

  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const handleCountdownClick = async () => {
    setIsCountdownActive((prevState) => (prevState === false ? true : false));
    console.log('clicked');
  }

  return (
    <div>
      <button class name="countdownButton" onClick={handleCountdownClick}>Endless Mode</button>
      {isCountdownActive === true && <p>Play until you get the color wrong! <br/> The questions get progressively harder <br/> and the question timer gets shorter as you play.</p>}
    </div>
  );
}

export default App;