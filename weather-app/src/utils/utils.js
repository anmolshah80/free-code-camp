const currentDate = () => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    day: 'numeric',
  });
};

const pascalizeString = (inputString) => {
  const splitString = inputString.split(' ');

  const pascalizedStringArray = splitString.map((string) => {
    return string[0].toUpperCase() + string.slice(1);
  });

  return pascalizedStringArray.join(' ');
};

const weatherDescription = (weatherArray) => {
  return weatherArray.map((weather, index) => {
    if (index + 1 === weatherArray.length) {
      return pascalizeString(weather.description);
    }

    return pascalizeString(weather.description) + ', ';
  });
};

export { currentDate, pascalizeString, weatherDescription };
