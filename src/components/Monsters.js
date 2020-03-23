import React from 'react';
import useMonsterActions from '../custom_hooks/useMonsterActions';
function Monsters(props) {
  const monstersActions = useMonsterActions(props.monsters);
  return (
    <tbody>
      {props.monsters.map((monster, i, array) => (
        <tr key={i}>
          <td>{monster.name}</td>
          <td>{monster.type}</td>
          <td>
            {monster.strength} <p style={{ display: 'inline' }}>/</p>
            {monster.maxStrength}
          </td>
          <td>
            {monster.health} <p style={{ display: 'inline' }}>/</p>
            {monster.maxHealth}
          </td>

          <td>{monster.special}</td>
          <td>
            <div className="actions">
              <h1>{monster.maxHealth}</h1>
              <span
                onClick={() => monstersActions.increaseHealth(monster)}
                className="increase-health"
              >
                Increase
              </span>
              <span
                onClick={() => monstersActions.decreaseHealth(monster)}
                className="decrease-health"
              >
                Decrease
              </span>
              <span
                onClick={() => monstersActions.deleteCreature(i, array)}
                className="delete-row"
              >
                delete
              </span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default React.memo(Monsters);
