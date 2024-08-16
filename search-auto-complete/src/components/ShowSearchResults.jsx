import concatenateFirstAndLastNames from 'utils/concatenateFirstAndLastNames';

const ShowSearchResults = ({ filteredData, handleSearchResultClick }) => {
  if (filteredData.length === 0) return null;

  return (
    <ul className="search-results-container">
      {filteredData.map((item, index) => (
        <li
          key={index}
          className="search-result"
          onClick={() => handleSearchResultClick(item.id)}
        >
          {concatenateFirstAndLastNames(item.firstName, item.lastName)}
        </li>
      ))}
    </ul>
  );
};

export default ShowSearchResults;
