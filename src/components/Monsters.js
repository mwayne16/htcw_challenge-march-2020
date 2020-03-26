import React from 'react';
import useMonsterActions from '../custom_hooks/useMonsterActions';
import '../layout/Gameboard.css';
function Monsters(props) {
  const monstersActions = useMonsterActions(props.monsters);
  return (
    <tbody>
      {props.monsters.map((monster, i, array) => (
        <tr key={i}>
          <td className="monster-name">
            <h1>{monster.name}</h1>
          </td>
          <td
            onMouseEnter={monstersActions.setMood.bind(this, monster)}
            className="monster-type"
          >
            <img src={`${monster.src}`} alt={`${monster.type} player card`} />
            <span className="monster-card">
              <p>{monster.type}</p>
              <span className="card-stats">
                <p>Stats:</p>
                <p>Strength: {monster.strength}</p>
                <p>Health: {monster.health}</p>
                <p>
                  Mood: {''}
                  {monster.mood}
                </p>
                <p>Ability: {''}TBD</p>
              </span>
            </span>
          </td>
          <td className="monster-strength">
            <span>
              <span className="strength-icon fas fa-fist-raised"></span>
              <p className="current-state">{monster.strength}</p>
              <p>/</p>
              <p className="max-state">{monster.maxStrength}</p>
            </span>
          </td>
          <td className="monster-health">
            <span>
              <span className="health-icon fas fa-first-aid"></span>
              <p className="current-state">{monster.health}</p>
              <p>/</p>
              <p className="max-state">{monster.maxHealth}</p>
            </span>
          </td>
          <td>{monster.special}</td>

          <td className="actions">
            <span
              onClick={() => monstersActions.increaseHealth(monster)}
              className="increase-health"
            >
              <span className="fas fa-heartbeat"></span>
            </span>
            <span
              onClick={() => monstersActions.decreaseHealth(monster, i, array)}
              className="decrease-health"
            >
              <span className="fas fa-heart-broken"></span>
            </span>
            <span
              onClick={() => monstersActions.deleteCreature(monster, i, array)}
              className="delete-row"
            >
              <span className="fas fa-minus-circle"></span>
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default React.memo(Monsters);
