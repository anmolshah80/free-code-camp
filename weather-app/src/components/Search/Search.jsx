import { useEffect, useRef, useState } from 'react';

import { Tooltip } from 'react-tooltip';

import fetchWeatherData from 'lib/fetchWeatherData';

const Search = ({
  searchValue,
  setSearchValue,
  setErrorMessage,
  setLoading,
  setWeatherData,
}) => {
  const searchInputRef = useRef(null);
  const slashKeyCounterRef = useRef(null);

  const [slashHotkeyClassName, setSlashHotkeyClassName] = useState('slash-key');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!searchValue) return;

    setErrorMessage(null);
    setSlashHotkeyClassName('slash-key');

    slashKeyCounterRef.current = 0;

    fetchWeatherData(searchValue, setLoading, setErrorMessage, setWeatherData);

    // hide the slash key from the search input bar since the input bar is still in focus after the api call
    setSlashHotkeyClassName('slash-key-hide');
  };

  useEffect(() => {
    // focus on the search bar whenever `/` (forward slash) is pressed
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

  return (
    <form className="search-engine" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          className="search-city"
          placeholder="Enter a city or country name"
          name="search-city"
          value={searchValue}
          ref={searchInputRef}
          onChange={(event) => setSearchValue(event.target.value)}
          onBlur={() => {
            slashKeyCounterRef.current = 0;
            setSlashHotkeyClassName('slash-key');
          }}
          onFocus={() => setSlashHotkeyClassName('slash-key-hide')}
        />
        <span
          className={slashHotkeyClassName}
          data-tooltip-id="slash-hotkey"
          data-tooltip-content="Type / to search"
          data-tooltip-place="top"
        >
          /
        </span>
        <Tooltip id="slash-hotkey" />
      </div>
      <input className="search-button" type="submit" value="Search" />
    </form>
  );
};

export default Search;
