const fetchUsers = async (setUsers, setLoading, setErrorMessage) => {
  setLoading(true);

  const url = 'https://dummyjson.com/users';

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users);
      }

      setLoading(false);
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

export default fetchUsers;
