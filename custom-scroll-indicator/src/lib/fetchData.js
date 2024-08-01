const fetchData = async (url, setLoading, setData, setErrorMessage) => {
  try {
    setLoading(true);

    const response = await fetch(url);
    const data = await response.json();

    if (data && data.products && data.products.length > 0) {
      setData(data.products);
      setLoading(false);
    }
  } catch (error) {
    setErrorMessage(error.message);
    setLoading(false);
  }
};

export default fetchData;
