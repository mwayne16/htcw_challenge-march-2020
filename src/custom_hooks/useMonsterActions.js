import { useState, useCallback } from 'react';
function useMonsterActions(initial) {
  const [value, setValue] = useState(initial);
  const removeIndex = (index, arr) => arr.splice(index, 1);
  return {
    value,
    setValue,
    increaseHealth: useCallback(creature => {
      setValue(
        creature.health < creature.maxHealth
          ? creature.health++
          : alert(
              `${creature.name}'s current health can't exceed their max health!`
            )
      );
    }, []),
    deleteCreature: useCallback(
      (creature, index, arr) =>
        setValue(
          window.confirm(`Are you sure you want to delete ${creature.name}?`)
            ? removeIndex(index, arr)
            : null
        ),
      []
    ),
    decreaseHealth: useCallback(
      (creature, index, arr) => {
        if (creature.health <= 1) {
          if (window.confirm(`${creature.name} will perish. Proceed?`)) {
            setValue(removeIndex(index, arr));
          } else {
            setValue(creature.health);
          }
        } else {
          setValue(creature.health--);
        }
      },

      []
    ),
    setMood: useCallback(
      creature =>
        setValue(
          (creature.mood =
            creature.health < creature.minHealth ? 'Wounded' : 'Battle Ready')
        ),
      []
    )
  };
}

// decreaseHealth: useCallback(
//   creature =>
//     setValue(
//       creature.health >= 2
//         ? creature.health--
//         : alert('Your creature will perish if you proceed.')
//     ),
//   []
// ),
export default useMonsterActions;
