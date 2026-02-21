import logo from './logo.svg';
import './App.css';
import './gamebutton'
import GameButton from './gamebutton';
function App() {
  return (
    <div className="App">
      <h1 className='title'>str00p.io</h1>
      <div className='homeScreenButtons'>
        <div className='typing-container'><h1>Select Game Mode</h1></div>
        <TimerButton />
        <CountdownButton />
        <GameButton color="blue"/>
      </div>
    </div>
  );
}

function TimerButton() {
  return (
    <button class name="timerButton">Time Trial</button>
  );
}

function CountdownButton() {
  return (
    <button class name="countdownButton">Endless Mode</button>
  );
}

export default App;