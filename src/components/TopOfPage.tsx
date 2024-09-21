import BigCardRecipe from "./BigCardRecipe";
import NewsSidebar from "./NewsSidebar";
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
    <div className="grid lg:grid-cols-[2fr_1fr] gap-4 justify-between items-start mb-8 px-6 py-6 mx-auto">
      <BigCardRecipe
        isMyRecipe={true}
        isSavedRecipe={true}
        recipe={recipe_test}
      />
      <NewsSidebar />
    </div>
  );
};

export default TopOfPage;
