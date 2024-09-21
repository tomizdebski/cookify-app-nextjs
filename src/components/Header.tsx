"use client";

import { ModeToggle } from "./ModeToggle";
import SearchZone from "./SearchZone";
import { assets } from "@/Assets/assets";
import { CATEGORY } from "@/app/constants/recipe.constant";
import useClickOutside from "@/app/hooks/useClickOutside";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const user = useUser();
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [recipeMenuOpen, setRecipeMenuOpen] = useState(false);

  const categoryMenuOpenRef: any = useClickOutside(() => {
    setCategoryMenuOpen(false);
  });

  const recipeMenuOpenRef: any = useClickOutside(() => {
    setRecipeMenuOpen(false);
  });

  return (
    <header className="bg-gradient-to-r  py-4 ">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-3xl font-bold text-white">
          <Image
            src={assets.logo_header}
            alt="Cookify"
            width={150}
            height={150}
            className="cursor-pointer lg:block hidden"
          />
          <Image
            src={assets.logo}
            alt="Cookify"
            width={50}
            height={50}
            className="cursor-pointer lg:hidden "
          />
        </Link>

        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <Link
                href="/recipes/create-edit"
                className=" items-center  transitions-colors duration-300"
              >
                New Recipe
              </Link>
            </li>
            <li className="relative" ref={categoryMenuOpenRef}>
              <button
                className=" items-center  transitions-colors duration-300"
                onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
              >
                Categories
              </button>

              <ul
                className={`absolute top-full left-0 bg-white shadow-lg py-2 rounded-md mt-1 block cursor-pointer ${
                  categoryMenuOpen ? "block" : "hidden"
                }`}
              >
                {CATEGORY.map((category) => (
                  <li className="px-4 py-2  opacity-95" key={category}>
                    {category}
                  </li>
                ))}
              </ul>
            </li>

            {user.isSignedIn && (
              <li className="relative" ref={recipeMenuOpenRef}>
                <button
                  className=" items-center  transitions-colors duration-300"
                  onClick={() => setRecipeMenuOpen(!recipeMenuOpen)}
                >
                  Recipes
                </button>
                <ul
                  className={`absolute top-full left-0 bg-white shadow-lg py-2 rounded-md mt-1 block cursor-pointer ${
                    recipeMenuOpen ? "block" : "hidden"
                  }`}
                >
                  <li className="px-4 py-2 ">
                    <Link href="/recipes/my/all">Main</Link>
                  </li>
                  <li className="px-4 py-2 text-black">
                    <Link href="/recipes/my/saved">Saved</Link>
                  </li>
                </ul>
              </li>
            )}
            <li>
              <ModeToggle />
            </li>

            <li>
              <SignedOut>
                <SignInButton>
                  <button className=" items-center text-black transitions-colors duration-300">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
