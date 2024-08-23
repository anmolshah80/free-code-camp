const concatenateFirstAndLastNames = (firstName, lastName) => {
  if (!firstName && !lastName) return;

  return firstName + ' ' + lastName;
};

export default concatenateFirstAndLastNames;
