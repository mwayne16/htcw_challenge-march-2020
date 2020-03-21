import { useState, useEffect } from 'react';
import axios from 'axios';
function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get(dataSource)
      .then(response => {
        setResults(response.data);
        setLoading(false);
      })
      .catch(error => new Error(error));
  }, [dataSource]);
  return {
    loading,
    results
  };
}
export default useDataFetching;
