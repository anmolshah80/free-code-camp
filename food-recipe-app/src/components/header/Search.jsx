import { useContext, useEffect, useRef, useState } from 'react';

import { Tooltip } from 'react-tooltip';

import { GlobalContext } from '@/context/GlobalContext';

import { searchRecipe } from '@/lib/SearchRecipe';

const Search = () => {
  const searchInputRef = useRef(null);
  const slashKeyCounterRef = useRef(0);

  const [slashHotkeyClassName, setSlashHotkeyClassName] = useState('slash-key');

  const {
    searchParam,
    setSearchParam,
    setLoading,
    setErrorMessage,
    setRecipes,
    navigate,
  } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!searchParam) return;

    setRecipes([]);

    setErrorMessage(null);
    setSlashHotkeyClassName('slash-key');

    slashKeyCounterRef.current = 0;

    searchRecipe(
      searchParam,
      setSearchParam,
      setLoading,
      setErrorMessage,
      setRecipes,
      navigate,
    );

    // hide the slash key from the search input bar since the input bar is still in focus after the api call
    setSlashHotkeyClassName('slash-key-hide');
  };

  useEffect(() => {
    // focus on the search bar whenever `/` (forward slash) key is pressed
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
          className="search-input"
          placeholder="Enter a food item"
          name="search"
          value={searchParam}
          ref={searchInputRef}
          onChange={(event) => setSearchParam(event.target.value)}
          onBlur={() => {
            slashKeyCounterRef.current = 0;
            setSlashHotkeyClassName('slash-key');
          }}
          onFocus={() => setSlashHotkeyClassName('slash-key-hide')}
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
      <input className="search-button" type="submit" value="Search" />
    </form>
  );
};

export default Search;
