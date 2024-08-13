import { useEffect, useState, useRef } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import User from 'components/User';

import fetchGitHubUserProfile from 'lib/fetchGitHubUserProfile';

import './styles.css';

const RenderProfileDetails = ({ userProfileData, errorMessage }) => {
  if (!userProfileData) return null;

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  return <User userProfileData={userProfileData} />;
};

const GithubProfileFinder = () => {
  const searchInputRef = useRef(null);
  const slashKeyCounterRef = useRef(0);

  const [username, setUsername] = useState('anmolshah80');
  const [userProfileData, setUserProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username) return;

    setErrorMessage(null);

    slashKeyCounterRef.current = 0;

    fetchGitHubUserProfile(
      setUsername,
      setLoading,
      setUserProfileData,
      setErrorMessage,
      username,
    );
  };

  useEffect(() => {
    fetchGitHubUserProfile(
      setUsername,
      setLoading,
      setUserProfileData,
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
            }}
          />
          <input className="submit-input" type="submit" value="Search" />
        </form>
      </div>
      <RenderProfileDetails
        userProfileData={userProfileData}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default GithubProfileFinder;
