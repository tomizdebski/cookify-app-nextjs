import Header from "@/components/Header";
import SearchZone from "@/components/SearchZone";
import SnackBar from "@/components/SnackBar";
import TopOfPage from "@/components/TopOfPage";
import { Button } from "@/components/ui/button";
import { SearchParams } from "@/types/type";
import { FC } from "react";

const Home: FC<{ searchParams: SearchParams }> = ({ searchParams }) => {
  const loggedIn = {
    firstName: "Tomas",
    lastName: "Garcia",
    email: "contact@gmail.com",
  };

  return (
    <section>
      <div className="container mx-auto px-0 ">
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
    </section>
  );
};

export default Home;
