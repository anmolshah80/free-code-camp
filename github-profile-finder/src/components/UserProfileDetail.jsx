const PublicRespositoriesDetail = ({ profileLink, publicRepositories }) => {
  if (publicRepositories === 0) {
    return <p>Public Repositories: {publicRepositories}</p>;
  }

  return (
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
  );
};

const PublicGistsDetail = ({ userName, publicGists }) => {
  if (publicGists === 0) {
    return <p>Public Gists: {publicGists}</p>;
  }

  return (
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
  );
};

const UserProfileDetail = ({ profileData }) => {
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
  } = profileData;

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
          <PublicRespositoriesDetail
            profileLink={profileLink}
            publicRepositories={publicRepositories}
          />
          <PublicGistsDetail userName={userName} publicGists={publicGists} />
        </div>
        <div>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetail;
