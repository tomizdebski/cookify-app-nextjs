"use client";

import { Recipes } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const BigCardRecipe: FC<{
  isMyRecipe: boolean;
  isSavedRecipe: boolean;
  recipe: Recipes;
}> = ({ isMyRecipe, isSavedRecipe, recipe }) => {
  //   const handleDelete = async (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     e.preventDefault();
  //     if (!userId) return;
  //     try {
  //       if (isSavedRecipe) {
  //         await deleteSavedRecipe(userId || "", recipe.recipeId);
  //       } else {
  //         await deleteRecipe(userId || "", recipe.recipeId);
  //       }
  //     } catch (error) {
  //       console.error("Failed to delete the recipe:", error);
  //     }
  //   };
  return (
    <Link legacyBehavior scroll={false} href={`/recipes/${recipe.id}`}>
      <div className="   overflow-hidden cursor-pointer hover:shadow-lg w-full h-auto">
        <img
          src={recipe.img_url}
          alt={recipe.description}
          className="w-full h-auto object-cover object-center"
        />
        <div className="">
          <p className="text-gray-600 mb-3 mt-3 text-sm">ZUPY</p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {recipe.description}
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            minus aperiam quasi facilis in velit fuga, temporibus tempore,
            repellendus sunt odio! Aut, accusantium. Impedit ad voluptatibus vel
            consequatur quis? Eius.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BigCardRecipe;
