import { useState, useCallback } from 'react';
function useMonsterActions(initial) {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    increaseHealth: useCallback(creature => {
      setValue(
        creature.health < creature.maxHealth
          ? creature.health++
          : alert('Monster is already max Health!')
      );
    }, []),

    decreaseHealth: useCallback(
      creature =>
        setValue(
          creature.health >= 2
            ? creature.health--
            : alert('Your creature will perish if you proceed.')
        ),
      []
    ),
    deleteCreature: useCallback(
      (index, arr) => setValue(arr.splice(index, 1)),
      []
    )
  };
}
export default useMonsterActions;
