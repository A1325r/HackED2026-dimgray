import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='homeScreenButtons'>
        <TimerButton />
        <CountdownButton />
      </div>
    </div>
  );
}

function TimerButton() {
  return (
    <button class name="timerButton">Timer Button</button>
  );
}

function CountdownButton() {
  return (
    <button class name="countdownButton">Countdown Button</button>
  );
}

export default App;