import React, { useState } from "react";
import CustomLayout from "../components/layout/CustomLayout";
import ListTvShow from "../components/Fragments/Lists/ListTvShow";
import transition from "../transition";
import { useParams } from "react-router-dom";
import {
  useFetchGenreLists,
  useFetchTvShows,
  useFetchTvShowsTrending,
} from "../hooks/useFetchDatas";
import SelectedGenres from "../components/Fragments/SelectedGenres";

function TvShowsLists() {
  const [genre, setGenre] = useState(10759);
  const { type } = useParams();
  const [data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage] =
    type === "discover"
      ? useFetchGenreLists("tv", genre)
      : type !== "trending"
      ? useFetchTvShows(type)
      : useFetchTvShowsTrending();
  if (status === "pending") <p className="text-white">Loading....</p>;
  if (status === "error") <p className="text-white">Error : {error.message}</p>;
  return (
    <CustomLayout>
      {type === "discover" ? (
        <SelectedGenres genreName={genre} setGenre={setGenre} type={"tv"} />
      ) : null}
      <ListTvShow
        data={data}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </CustomLayout>
  );
}

export default transition(TvShowsLists);
