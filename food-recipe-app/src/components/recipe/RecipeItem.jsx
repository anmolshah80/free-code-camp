import { Link } from 'react-router-dom';

import {
  formatRecipeTitleInPascalCase,
  formatRecipeTitlesInKebabCase,
} from '@/utils/formatRecipeTitles';

const RecipeItem = ({ item }) => {
  const { id: recipeID, image_url: imageUrl, publisher, title } = item;

  const formattedRecipeTitle = formatRecipeTitleInPascalCase(title);

  return (
    <Link to={`/${formatRecipeTitlesInKebabCase(title)}`} state={{ recipeID }}>
      <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
        <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
          <img
            src={imageUrl}
            alt={`${formattedRecipeTitle}'s recipe`}
            className="block w-full"
          />
        </div>
        <div>
          <span className="text-sm text-cyan-700 font-medium">{publisher}</span>
          <h3 className="font-bold text-2xl truncate text-black">
            {formattedRecipeTitle}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeItem;
