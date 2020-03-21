import React, { useEffect } from 'react';
import { creatures } from './monsterConfig';
import useMonsterGeneration from '../custom_hooks/useMonsterGeneration';
import useMonsterActions from '../custom_hooks/useMonsterActions';
function Monsters() {
  const [monsters, loading] = useMonsterGeneration(creatures);

  useEffect(() => {
    if (!loading) {
      setInterval(() => {
        monsters.splice(0, 1);
      }, 3000);
    }

    return () => {};
  }, [monsters]);
  if (loading) {
    return 'Loading...';
  }
  console.log(monsters);
  return (
    <tbody>
      {monsters.map(
        ({
          name,
          type,
          health,
          maxHealth,
          strength,
          maxStrength,
          special,
          key
        }) => (
          <tr key={key}>
            <td>{name}</td>
            <td>{type}</td>
            <td>{health}</td>
            <td>{strength}</td>
            <td>{special}</td>

            <td>
              <div className="actions">
                <h1>{maxHealth}</h1>
                <span className="increase-health">Increase</span>
                <span className="decrease-health">Decrease</span>
                <span onClick className="delete-row">
                  delete
                </span>
              </div>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
}

export default React.memo(Monsters);
