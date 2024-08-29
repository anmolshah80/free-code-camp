import { useEffect, useState } from 'react';

import { AiOutlineLoading } from 'react-icons/ai';

import fetchWeatherData from 'lib/fetchWeatherData';
import { formatCurrentDate, weatherDescription } from 'utils/utils';

import Search from 'components/Search/Search';
import 'components/styles.css';

const ShowDescriptionsWithIcons = ({ weatherArray }) => {
  // attach an image for each of these individual pascalized descriptions
  const pascalizedDescriptionArray = weatherDescription(weatherArray);

  return pascalizedDescriptionArray.map((description, index) => {
    const imageUrl = `https://openweathermap.org/img/w/${weatherArray[index].icon}.png`;

    return (
      <div className="description-container">
        <img src={imageUrl} alt={`${description} icon`} />
        <p>{description}</p>
      </div>
    );
  });
};

const ShowWeatherDetails = ({ loading, errorMessage, weatherData }) => {
  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  if (!weatherData) return null;

  const {
    coord: { lon: longitude, lat: latitude },
    name: cityName,
    sys: { country },
    main: { temp: temperature, humidity },
    weather: weatherArray,
    wind: { speed: windSpeed },
  } = weatherData;

  return (
    <div className="weather-details-container">
      <div>
        <h2 className="city-details">
          {cityName}, {country}
        </h2>
        <p className="date">{formatCurrentDate()}</p>
      </div>
      <p className="temperature">{temperature}°F</p>
      <div className="descriptions">
        <ShowDescriptionsWithIcons weatherArray={weatherArray} />
      </div>
      <div className="weather-info">
        <div className="column">
          <p className="column-value">{windSpeed}</p>
          <p className="column-label">Wind Speed</p>
        </div>
        <div className="column">
          <p className="column-value">{humidity}</p>
          <p className="column-label">Humidity</p>
        </div>
        <div className="column">
          <p className="column-value">{latitude}</p>
          <p className="column-label">Latitude</p>
        </div>
        <div className="column">
          <p className="column-value">{longitude}</p>
          <p className="column-label">Longitude</p>
        </div>
      </div>
    </div>
  );
};

const WeatherDetails = () => {
  const [searchValue, setSearchValue] = useState('Kathmandu');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData(searchValue, setLoading, setErrorMessage, setWeatherData);

    setErrorMessage(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="page-header">Weather App</h1>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setErrorMessage={setErrorMessage}
        setLoading={setLoading}
        setWeatherData={setWeatherData}
      />
      <ShowWeatherDetails
        loading={loading}
        errorMessage={errorMessage}
        weatherData={weatherData}
      />
    </div>
  );
};

export default WeatherDetails;
