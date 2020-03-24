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
        <div className="boardActions">
          <span onClick={rollTheDice.bind(this, 1, 6)} className="roll-dice">
            Roll The Dice
          </span>
          <span onClick={() => setReset(!reset)} className="reset-board">
            Reset
          </span>
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
