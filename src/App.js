import './App.css';
import { useState, useEffect } from 'react';

const idToNum = (id) => {
  if (id === 'Q')
    return 0;
  if (id === 'W')
    return 1;
  if (id === 'E')
    return 2;
  if (id === 'A')
    return 3;
  if (id === 'S')
    return 4;
  if (id === 'D')
    return 5;
  if (id === 'Z')
    return 6;
  if (id === 'X')
    return 7;
  if (id === 'C')
    return 8;
}

const audio = [
  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'),
];

const name = ["Heater 1", "Heater 2", "Heater 3", "Heater 4", "Clap", "Open HH", "Kick n' Hat", "Kick", "Closed HH"];

function App() {

  const [display, setDisplay] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', keypress, true);
  }, []);

  const keypress = (e) => {

    if (idToNum(e.key.toUpperCase()) >= 0 && idToNum(e.key.toUpperCase()) <= 8) {
      audio[idToNum(e.key.toUpperCase())].play();
      setDisplay(name[idToNum(e.key.toUpperCase())]);
    }

  }

  const Button = (props) => {
    const playSound = () => {
      audio[idToNum(props.id)].play();
      setDisplay(name[idToNum(props.id)]);
    }
    return (
      <button className='drum-pad' onClick={playSound} >
        {props.id}
      </button>
    );
  }

  return (
    <div className="App">

      <div id='drum-machine' className='machine'>
        <div className='pad-set'>
          <Button id="Q" />
          <Button id="W" />
          <Button id="E" />
          <Button id="A" />
          <Button id="S" />
          <Button id="D" />
          <Button id="Z" />
          <Button id="X" />
          <Button id="C" />
        </div>
        <div className='display'><h3>{display}</h3></div>
      </div>
      <strong>Devansh Awasthi ❤️</strong>
    </div>
  );
}

export default App;
