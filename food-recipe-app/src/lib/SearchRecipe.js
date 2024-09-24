// function to search for recipes based on a search term
const searchRecipe = async (
  searchParam,
  setSearchParam,
  setLoading,
  setErrorMessage,
  setRecipes,
  navigate,
) => {
  setLoading(true);

  try {
    const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`;

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      const {
        data: { recipes },
      } = data;

      if (recipes && recipes.length) {
        setRecipes(recipes);
        setSearchParam('');
      }

      navigate('/');

      setLoading(false);
    } else {
      const { status } = response;

      switch (status) {
        case 401:
          throw new Error('401, Unauthorized');
        case 404:
          throw new Error('404, Not Found');
        case 500:
          throw new Error('500, Internal Server Error');
        default:
          throw new Error(status);
      }
    }
  } catch (error) {
    setErrorMessage(error.message);
    setLoading(false);
  }
};

// function to search for a recipe using its ID
const searchRecipeByID = async (
  recipeID,
  setLoading,
  setCurrentRecipe,
  setErrorMessage,
) => {
  try {
    setLoading(true);

    const url = `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeID}`;

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      const {
        data: { recipe: recipeDetails },
      } = data;

      setCurrentRecipe(recipeDetails);

      setLoading(false);
    } else {
      const { status } = response;

      if (status === 404) throw new Error('404, Not Found');

      if (status === 500) throw new Error('500, Internal Server Error');

      throw new Error(status);
    }
  } catch (error) {
    setErrorMessage(error.message);
    setLoading(false);
  }
};

export { searchRecipe, searchRecipeByID };
