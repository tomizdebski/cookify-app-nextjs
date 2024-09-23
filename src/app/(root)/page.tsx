import { assets } from "@/Assets/assets";
import Header from "@/components/Header";
import SearchZone from "@/components/SearchZone";
import SnackBar from "@/components/SnackBar";
import TopOfPage from "@/components/TopOfPage";
import { Button } from "@/components/ui/button";
import { SearchParams } from "@/types/type";
import Image from "next/image";
import { FC } from "react";

const Home: FC<{ searchParams: SearchParams }> = ({ searchParams }) => {
  const loggedIn = {
    firstName: "Tomas",
    lastName: "Garcia",
    email: "contact@gmail.com",
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-0  ">
        <SearchZone
          path="/"
          searchValue={searchParams.searchText}
          sortValue={searchParams.sortBy}
        />
      </div>

      <SnackBar />
      <div className="container mx-auto px-0 ">
        <TopOfPage />
      </div>
      <Image className="w-full" src={assets.ham} alt="food" />
    </section>
  );
};

export default Home;
