import React from 'react';
import useMonsterActions from '../custom_hooks/useMonsterActions';
import '../layout/Gameboard.css';
function Monsters(props) {
  const monstersActions = useMonsterActions(props.monsters);

  return (
    <tbody>
      {props.monsters.map((monster, i, array) => (
        <tr key={i}>
          <td>
            <h1>{monster.name}</h1>
          </td>
          <td className="monster-type">
            {/* <img src={`${monster.src}`} alt={`${monster.type} player card`} /> */}
            <h1>{monster.type}</h1>
          </td>
          <td className="monster-strength">
            <span>
              <p className="current-state">{monster.strength}</p>/
              <p className="max-state">{monster.maxStrength}</p>
            </span>
          </td>
          <td className="monster-health">
            <span>
              <p className="current-state">{monster.health}</p>/
              <p className="max-state">{monster.maxHealth}</p>
            </span>
          </td>
          <td>{monster.special}</td>

          <td>
            <div className="actions">
              <span
                onClick={() => monstersActions.increaseHealth(monster)}
                className="increase-health"
              >
                <p>Increase</p>
              </span>
              <span
                onClick={() => monstersActions.decreaseHealth(monster)}
                className="decrease-health"
              >
                <p>Decrease</p>
              </span>
              <span
                onClick={() => monstersActions.deleteCreature(i, array)}
                className="delete-row"
              >
                <p>Delete</p>
              </span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default React.memo(Monsters);
