import { useContext } from 'react';

import { AiOutlineLoading } from 'react-icons/ai';

import { GlobalContext } from '@/context/GlobalContext';

import RecipeItem from '@/components/recipe/RecipeItem';

const RenderRecipeList = ({ loading, errorMessage, recipes }) => {
  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  if (recipes && recipes.length === 0) {
    return (
      <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
        Nothing to show. Please search for something else!
      </p>
    );
  }

  return recipes.map((recipeItem) => (
    <RecipeItem item={recipeItem} key={recipeItem.id} />
  ));
};

const FoodRecipeList = () => {
  const { loading, errorMessage, recipes } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      <RenderRecipeList
        loading={loading}
        errorMessage={errorMessage}
        recipes={recipes}
      />
    </div>
  );
};

export default FoodRecipeList;
