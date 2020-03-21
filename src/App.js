import React from 'react';
import Gameboard from './components/Gameboard';
import Monsters from './components/Monsters';
import './index.css';

function App() {
  return (
    <div className="App">
      <Gameboard>
        <Monsters />
      </Gameboard>
    </div>
  );
}

export default App;
