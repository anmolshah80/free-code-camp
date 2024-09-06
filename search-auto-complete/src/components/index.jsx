import { useEffect, useState, useRef } from 'react';

import { AiOutlineLoading } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';

import fetchUsers from 'lib/fetchUsers';

import ShowSearchResults from 'components/ShowSearchResults';
import UserDetails from 'components/UserDetails';

import './styles.css';

const SearchAutoComplete = () => {
  const searchInputRef = useRef(null);
  const slashKeyCounterRef = useRef(0);

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchParam, setSearchParam] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [slashHotkeyClassName, setSlashHotkeyClassName] = useState('slash-key');
  const [selectedSearchResult, setSelectedSearchResult] = useState(null);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();

    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter(
              (item) =>
                item.firstName.toLowerCase().indexOf(query) > -1 ||
                item.lastName.toLowerCase().indexOf(query) > -1,
            )
          : [];

      setFilteredUsers(filteredData);
    }

    if (query.length === 0) {
      setFilteredUsers([]);
    }
  };

  const handleSearchResultClick = (id) => {
    const searchResult = filteredUsers.find((item) => item.id === id);

    setSearchParam(`${searchResult.firstName} ${searchResult.lastName}`);
    setSelectedSearchResult(searchResult);

    setFilteredUsers([]);

    searchInputRef.current.focus();
  };

  const handleSearchInputOnBlur = () => {
    slashKeyCounterRef.current = 0;
    setSlashHotkeyClassName('slash-key');

    // Remove user details from the page if search parameter is empty when the search input bar loses focus
    if (!searchParam) {
      setSelectedSearchResult(null);
    }
  };

  useEffect(() => {
    fetchUsers(setUsers, setLoading, setErrorMessage);
  }, []);

  useEffect(() => {
    const focusElementWithHotkey = (event) => {
      if (event.key !== '/') return;

      if (slashKeyCounterRef.current === 0) {
        event.preventDefault();
        searchInputRef.current.focus();
        slashKeyCounterRef.current += 1;

        return;
      }

      searchInputRef.current.focus();
    };

    document.addEventListener('keydown', focusElementWithHotkey);

    return () => {
      document.removeEventListener('keydown', focusElementWithHotkey);
    };
  }, []);

  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  return (
    <div className="search-autocomplete-container">
      <div className="search-input-container">
        <input
          type="text"
          name="search-user"
          placeholder="Search User"
          value={searchParam}
          onChange={handleChange}
          className="search-input"
          autoComplete="off"
          ref={searchInputRef}
          onBlur={handleSearchInputOnBlur}
          onFocus={() => {
            setSlashHotkeyClassName('slash-key-hide');
          }}
        />
        <span
          className={slashHotkeyClassName}
          data-tooltip-id="slash-hotkey"
          data-tooltip-content="Press / to start typing"
          data-tooltip-place="top"
        >
          /
        </span>
        <Tooltip id="slash-hotkey" />
      </div>
      <ShowSearchResults
        filteredData={filteredUsers}
        handleSearchResultClick={handleSearchResultClick}
      />
      <UserDetails userData={selectedSearchResult} />
    </div>
  );
};

export default SearchAutoComplete;
