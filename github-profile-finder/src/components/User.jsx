const User = ({ userProfileData }) => {
  const {
    followers,
    following,
    name,
    location,
    avatar_url: avatarUrl,
    public_repos: publicRepositories,
    public_gists: publicGists,
    created_at: createdAt,
    html_url: profileLink,
    login: userName,
  } = userProfileData;

  const joinedIn = new Date(createdAt);

  return (
    <div className="user">
      <p>Profile Details</p>
      <div>
        <img src={avatarUrl} alt="User Avatar" className="user-avatar" />
      </div>
      <div className="name-container">
        <a href={profileLink} target="_blank" rel="noreferrer noopener">
          {name || userName}
        </a>
        <p>
          Joined GitHub On:{' '}
          {`${joinedIn.getDate()} ${joinedIn.toLocaleString('en-us', {
            month: 'short',
          })} ${joinedIn.getFullYear()}`}
        </p>
        {location && <p>Location: {location}</p>}
      </div>
      <div>
        <div>
          <p>
            Public Repositories:{' '}
            <a
              href={`${profileLink}?tab=repositories`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {publicRepositories}
            </a>
          </p>
          <p>
            Public Gists:{' '}
            <a
              href={`https://gist.github.com/${userName}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {publicGists}
            </a>
          </p>
        </div>

        <div>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
