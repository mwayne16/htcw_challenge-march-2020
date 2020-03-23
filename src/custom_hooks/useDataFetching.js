import { useState, useEffect } from 'react';
import axios from 'axios';
function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  useEffect(() => {
    const Fetch = async function() {
      axios
        .get(dataSource)
        .then(response => {
          setResults(response.data);
          setLoading(false);
        })
        .catch(error => new Error(error));
    };
    Fetch();
  }, [dataSource]);
  return {
    loading,
    results
  };
}
export default useDataFetching;
