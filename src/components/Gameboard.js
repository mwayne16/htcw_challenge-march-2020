import React from 'react';
import Monsters from './Monsters';
import { creatures } from './monsterConfig';
import useMonsterGeneration from '../custom_hooks/useMonsterGeneration';
function Gameboard() {
  const { setReset, reset, ...props } = useMonsterGeneration(creatures);
  return (
    <main>
      <section id="gameboard">
        <div className="boardActions">
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
