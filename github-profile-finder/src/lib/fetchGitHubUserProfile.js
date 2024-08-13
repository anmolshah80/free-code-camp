const fetchGitHubUserProfile = async (
  setUsername,
  setLoading,
  setUserProfileData,
  setErrorMessage,
  username,
) => {
  setLoading(true);

  try {
    const url = `https://api.github.com/users/${username}`;

    const response = await fetch(url);

    if (response.ok) {
      const gitHubProfile = await response.json();

      setUserProfileData(gitHubProfile);
      setLoading(false);
      setUsername('');
    } else {
      if (response.status === 404) throw new Error('404, Not Found');

      if (response.status === 500)
        throw new Error('500, Internal Server Error');

      throw new Error(response.status);
    }
  } catch (error) {
    setErrorMessage(error.message);
    setLoading(false);
  }
};

export default fetchGitHubUserProfile;
