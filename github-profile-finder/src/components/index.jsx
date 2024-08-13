import { useEffect, useState, useRef } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import fetchGitHubUserProfile from 'lib/fetchGitHubUserProfile';

import UserProfileDetail from 'components/UserProfileDetail';

import './styles.css';

const RenderProfileDetails = ({ profileData, errorMessage }) => {
  if (!profileData) return null;

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  return <UserProfileDetail profileData={profileData} />;
};

const GithubProfileFinder = () => {
  const searchInputRef = useRef(null);
  const slashKeyCounterRef = useRef(0);

  const [username, setUsername] = useState('anmolshah80');
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [slashHotkeyClassName, setSlashHotkeyClassName] = useState('slash-key');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username) return;

    setErrorMessage(null);
    setSlashHotkeyClassName('slash-key');

    slashKeyCounterRef.current = 0;

    fetchGitHubUserProfile(
      setUsername,
      setLoading,
      setProfileData,
      setErrorMessage,
      username,
    );
  };

  useEffect(() => {
    fetchGitHubUserProfile(
      setUsername,
      setLoading,
      setProfileData,
      setErrorMessage,
      username,
    );
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

      /**
       * Alternative Solution
       * 
       * const searchInput = document.getElementById('search-input');
       * 
       * if (searchInput) {
           searchInput.focus();
         }
       * 
       */
    };

    document.addEventListener('keydown', focusElementWithHotkey);

    return () => {
      document.removeEventListener('keydown', focusElementWithHotkey);
    };
  }, []);

  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="search-input-container">
            <input
              id="search-input"
              name="search-by-username"
              type="text"
              placeholder="Type Your GitHub Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="search-input"
              ref={searchInputRef}
              onBlur={() => {
                slashKeyCounterRef.current = 0;
                setSlashHotkeyClassName('slash-key');
              }}
              onFocus={() => {
                setSlashHotkeyClassName('slash-key-hide');
              }}
            />
            <span className={slashHotkeyClassName}>/</span>
          </div>
          <input className="submit-input" type="submit" value="Search" />
        </form>
      </div>
      <RenderProfileDetails
        profileData={profileData}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default GithubProfileFinder;
