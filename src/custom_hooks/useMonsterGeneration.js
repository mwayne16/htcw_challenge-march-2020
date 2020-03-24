import { useState, useEffect } from 'react';
import useDataFetching from './useDataFetching';
function useMonsterGeneration(source) {
  const [monsters, setMonsters] = useState([]);
  const [reset, setReset] = useState(false);
  const { results, loading } = useDataFetching(
    'https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.json'
  );

  const maxCount = 100;
  const generateValue = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const generateKeyValues = arr => arr[Math.floor(Math.random() * arr.length)];
  const generateMonster = (creature, key) => {
    return {
      key,
      type: creature.type,
      name: generateKeyValues([...results]),
      health: generateValue(creature.minHealth, creature.maxHealth),
      strength: generateValue(creature.minStrength, creature.maxStrength),
      maxHealth: creature.maxHealth,
      maxStrength: creature.maxStrength,
      speacial: creature.special,
      src: creature.src
    };
  };

  useEffect(() => {
    if (!loading) {
      const storeCreature = async function() {
        await source.map(monster => {
          let cachedMonsters = [];
          for (let i = 0; i <= maxCount - 1; i++) {
            monster = generateKeyValues(source);
            cachedMonsters.push(generateMonster(monster, i));
          }
          return setMonsters(cachedMonsters);
        });
      };
      storeCreature();
    }
  }, [loading, reset]);
  return { monsters, loading, setReset, reset };
}
export default useMonsterGeneration;
