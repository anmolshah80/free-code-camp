import { useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url, { ...options });

      if (response.ok) {
        const data = await response.json();

        setData(data);
        setLoading(false);
      } else {
        const { status } = response;

        if (status === 404) throw new Error('404, Not Found');

        if (status === 500) throw new Error('500, Internal Server Error');

        throw new Error(status);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, errorMessage, data };
};

export default useFetch;
