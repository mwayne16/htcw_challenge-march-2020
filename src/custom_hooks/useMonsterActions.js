import { useState, useEffect, useCallback } from 'react';

function useMonsterActions(initial) {
  const [value, setValue] = useState(initial);

  return {
    value,
    setValue,
    increaseHealth: useCallback(
      h => setValue(h < initial ? h++ : alert('Monster is already max Health')),
      [initial]
    ),
    decreaseHealth: useCallback(h => setValue(h--), []),
    deleteCreature: useCallback(
      index =>
        setValue(v => {
          v.splice(index, 1);
          return v;
        }),
      []
    )
  };
}
export default useMonsterActions;
