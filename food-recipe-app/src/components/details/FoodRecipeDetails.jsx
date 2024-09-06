import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { AiOutlineLoading } from 'react-icons/ai';

import { GlobalContext } from '@/context/GlobalContext';
import { searchRecipeByID } from '@/lib/SearchRecipe';
import { formatRecipeTitleInPascalCase } from '@/utils/formatRecipeTitles';

const AddToFavorites = ({
  favoriteRecipes,
  currentRecipe,
  handleAddToFavorites,
}) => {
  const index = favoriteRecipes.findIndex(
    (item) => item.id === currentRecipe.id,
  );

  if (index === -1) {
    return (
      <button
        className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
        onClick={() => handleAddToFavorites(currentRecipe)}
      >
        Add to Favorites
      </button>
    );
  }

  return (
    <button
      className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
      onClick={() => handleAddToFavorites(currentRecipe)}
    >
      Remove from Favorites
    </button>
  );
};

const ShowRecipeIngredients = ({ ingredients }) => {
  if (ingredients && ingredients.length === 0) return null;

  return ingredients.map((ingredient, index) => (
    <li className="ml-9" key={index}>
      <span className="text-xl font-semibold text-black">
        {ingredient.quantity} {ingredient.unit} {ingredient.description}
      </span>
    </li>
  ));
};

const FoodRecipeDetails = () => {
  const {
    state: { recipeID },
  } = useLocation();

  const {
    currentRecipe,
    setCurrentRecipe,
    setLoading,
    loading,
    setErrorMessage,
    errorMessage,
    favoriteRecipes,
    handleAddToFavorites,
  } = useContext(GlobalContext);

  useEffect(() => {
    searchRecipeByID(recipeID, setLoading, setCurrentRecipe, setErrorMessage);
  }, [recipeID]);

  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  if (!currentRecipe) return null;

  const {
    title,
    image_url: imageUrl,
    publisher,
    ingredients,
    source_url: sourceUrl,
    servings,
    cooking_time: cookingTime,
  } = currentRecipe;

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <h1 className="font-bold truncate text-black text-center text-4xl">
        {formatRecipeTitleInPascalCase(title)}
      </h1>
      <div className="row-start-2 lg:row-start-auto">
        <a
          className="text-lg text-cyan-700 font-medium ml-2"
          href={sourceUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          {publisher}
        </a>
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={imageUrl}
            alt={`${title}'s recipe image`}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <AddToFavorites
            favoriteRecipes={favoriteRecipes}
            currentRecipe={currentRecipe}
            handleAddToFavorites={handleAddToFavorites}
          />
        </div>
        <p className="text-2xl font-semibold">Servings: {servings}</p>
        <p className="text-2xl font-semibold">
          Cooking time: {cookingTime} minutes
        </p>
        <div>
          <p className="text-2xl font-semibold text-black mb-3">Ingredients</p>
          <ul className="flex flex-col gap-3 list-disc">
            <ShowRecipeIngredients ingredients={ingredients} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodRecipeDetails;
