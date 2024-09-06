import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchRecipe } from '@/lib/SearchRecipe';

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState('apple');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    searchRecipe(
      searchParam,
      setSearchParam,
      setLoading,
      setErrorMessage,
      setRecipes,
      navigate,
    );
  }, []);

  const handleAddToFavorites = (currentRecipe) => {
    let favoriteRecipesCopy = [...favoriteRecipes];

    const index = favoriteRecipesCopy.findIndex(
      (item) => item.id === currentRecipe.id,
    );

    if (index === -1) {
      favoriteRecipesCopy.push(currentRecipe);
    } else {
      favoriteRecipesCopy = favoriteRecipesCopy.filter(
        (favpriteRecipe) => favpriteRecipe.id !== currentRecipe.id,
      );
    }

    setFavoriteRecipes(favoriteRecipesCopy);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        errorMessage,
        recipes,
        favoriteRecipes,
        currentRecipe,
        handleAddToFavorites,
        setSearchParam,
        setLoading,
        setErrorMessage,
        setCurrentRecipe,
        setRecipes,
        navigate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
