import concatenateFirstAndLastNames from 'utils/concatenateFirstAndLastNames';

const UserDetails = ({ userData }) => {
  if (!userData) return null;

  const {
    address: { address: addressLine1, city, state, country },
    birthDate,
    email: emailAddress,
    phone: phoneNumber,
    eyeColor,
    height,
    firstName,
    lastName,
    image,
  } = userData;

  return (
    <div className="user-details-container">
      <p>User Details</p>
      <img
        src={image}
        alt={`${concatenateFirstAndLastNames(firstName, lastName)}'s Avatar`}
        className="user-avatar"
      />
      <p>{concatenateFirstAndLastNames(firstName, lastName)}</p>
      <p>Email Address: {emailAddress}</p>
      <p>Phone No.: {phoneNumber}</p>
      <p>Date of Birth: {birthDate}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Height: {height}cm</p>
      <p>Address: {`${addressLine1}, ${city}, ${state}, ${country}`}</p>
    </div>
  );
};

export default UserDetails;
