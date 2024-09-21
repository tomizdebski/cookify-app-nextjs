"use client";

import { sortMethods } from "@/app/constants/recipe.constant";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

const SearchZone: FC<{
  path?: string;
  sortValue?: string;
  searchValue?: string;
}> = ({ path, sortValue, searchValue }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState(searchValue || "");

  return (
    <div className=" flex justify-between items-center mb-8 px-6">
      <div className="flex items-center  rounded-md">
        <input
          type="text"
          placeholder="Search with title"
          className="w-full border border-gray-300 rounded-md rounded-r-none px-4 py-2 focus:outline-none text-black focus:border-[#ff8261] dark:bg-[#f8f9d1]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-[#ff6339] text-white px-4 py-2 rounded-md rounded-l-none hover:bg-[#ff8261] focus:outline-none"
          onClick={() => {
            if (searchText) {
              router.push(`${path || "/"}?search=${searchText}`);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <span className=" font-semibold text-gray-800">Sort By:</span>
        <select
          className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#ff8261] text-black dark:bg-[#f8f9d1]"
          onChange={(e) => {
            if (e.target.value)
              router.push(`${path || "/"}?sortBy=${e.target.value}`);
            else router.push(path || "/");
          }}
          defaultValue={sortValue || ""}
        >
          <option value="">Sort By</option>
          {Object.entries(sortMethods).map(([methodName, methodValue]) => (
            <option
              value={methodName}
              key={methodName}
              className="dark:bg-[#f8f9d1]"
            >
              {methodValue.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchZone;
