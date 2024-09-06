import { useContext } from 'react';

import { AiOutlineLoading } from 'react-icons/ai';

import { GlobalContext } from '@/context/GlobalContext';

import RecipeItem from '@/components/recipe/RecipeItem';

const RenderFavoriteRecipes = ({ favoriteRecipes }) => {
  if (favoriteRecipes && favoriteRecipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 mt-9">
        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
          No Favorites Yet!
        </p>
        <p className="text-center">
          Click on 'Add to Favorites' to add your favorite recipes, and see them
          here at a glance.
        </p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center text-4xl text-black font-bold">
        Your Favorites
      </h1>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {favoriteRecipes.map((recipeItem) => (
          <RecipeItem item={recipeItem} key={recipeItem.id} />
        ))}
      </div>
    </>
  );
};

const FavoriteFoodRecipes = () => {
  const { loading, errorMessage, favoriteRecipes } = useContext(GlobalContext);

  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  return <RenderFavoriteRecipes favoriteRecipes={favoriteRecipes} />;
};

export default FavoriteFoodRecipes;
