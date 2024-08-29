const fetchWeatherData = async (
  searchParam,
  setLoading,
  setErrorMessage,
  setWeatherData,
) => {
  setLoading(true);

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchParam}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      setWeatherData(data);
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

export default fetchWeatherData;
