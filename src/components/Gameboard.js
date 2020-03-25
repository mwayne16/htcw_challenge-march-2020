import React from 'react';
import Monsters from './Monsters';
import { creatures } from './monsterConfig';
import useMonsterGeneration from '../custom_hooks/useMonsterGeneration';
function Gameboard() {
  const rollTheDice = (min, max) => {
    let value = Math.floor(Math.random() * (max - min + 1) + min);
    return alert(`You rolled a ${value}`);
  };
  // Google font
  const { setReset, reset, ...props } = useMonsterGeneration(creatures);
  return (
    <main>
      <section id="gameboard">
        <h1 className="board-title">HTCW March Coding Challenge</h1>
        <div className="board-actions">
          <div className="dice-roll " onClick={rollTheDice.bind(this, 1, 6)}>
            <span className="fas fa-dice"></span>
          </div>
          <div className="board-reset" onClick={() => setReset(!reset)}>
            <span className=" fas fa-undo-alt"></span>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Strength</th>
              <th>Health</th>
              <th>Special Power</th>
              <th>Action</th>
            </tr>
          </thead>
          <Monsters {...props} />
        </table>
      </section>
    </main>
  );
}

export default Gameboard;

// console.log(names[Math.floor(Math.random() * names.length)]);
// useTraceUpdate({ props: monsters, loading, setReset });
