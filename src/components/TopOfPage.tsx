import RecipeCard from "./RecipeCard";
import { Recipes } from "@prisma/client";
import React from "react";

const recipe_test: Recipes = {
  id: 1,
  user_id: 1,
  description: "Krupnik",
  category_id: 1,
  dish_id: 1,
  img_url:
    "https://az.przepisy.pl/www-przepisy-pl/www.przepisy.pl/przepisy3ii/img/variants/800x0/krupnik-domowy.jpg",
  prep_time: 1,
  created_at: new Date(),
};

const TopOfPage = () => {
  return (
    <div className="flex justify-between items-center mb-8 px-6 py-4 mx-auto">
      <RecipeCard
        isMyRecipe={false}
        isSavedRecipe={true}
        recipe={recipe_test}
      />
    </div>
  );
};

export default TopOfPage;
