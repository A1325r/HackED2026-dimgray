import logo from './logo.svg';
import './App.css';
import './gamebutton'
import GameButton from './gamebutton';
function App() {
  return (
    <div className="App">
      <div className='homeScreenButtons'>
        <h1>Select Game Mode</h1>
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