import React from 'react';
import Gameboard from './components/Gameboard';
import './index.css';

function App() {
  return (
    <div className="App">
      <Gameboard />
    </div>
  );
}

export default React.memo(App);
