import { Routes, Route } from 'react-router-dom';

import Navbar from '@/components/header/Navbar';
import FoodRecipeList from '@/components/home/FoodRecipeList';
import FoodRecipeDetails from '@/components/details/FoodRecipeDetails';
import FavoriteFoodRecipes from '@/components/favorites/FavoriteFoodRecipes';

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<FoodRecipeList />} />
          <Route path="/favorites" element={<FavoriteFoodRecipes />} />
          <Route path={`/:recipe_name`} element={<FoodRecipeDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
