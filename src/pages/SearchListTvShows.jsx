import { lazy, Suspense } from "react";
import CustomLayout from "../components/layout/CustomLayout";
import Loader from "../components/Elements/Loader";
import { useSearchParams } from "react-router-dom";
const ListSearchMovies = lazy(() =>
  import("../components/Fragments/Lists/ListSearchMovies")
);

function SearchListTvShows() {
  const [searchParam, setSearchParam] = useSearchParams();
  const search = searchParam.get("search") || "one piece";
  return (
    <CustomLayout setSearchParam={setSearchParam}>
      <Suspense fallback={<Loader />}>
        <ListSearchMovies search={search} />
      </Suspense>
    </CustomLayout>
  );
}

export default SearchListTvShows;
