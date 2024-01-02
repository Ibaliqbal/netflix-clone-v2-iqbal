import React from "react";
import CustomLayout from "../components/layout/CustomLayout";
import ListMovie from "../components/Fragments/Lists/ListMovie";
import transition from "../transition";
import {
  useFetchGenreLists,
  useFetchMovies,
  useFetchMoviesTrending,
} from "../hooks/useFetchDatas";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SelectedGenres from "../components/Fragments/SelectedGenres";

function MovieLists() {
  const [genre, setGenre] = useState(28);
  const { type } = useParams();
  const [data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage] =
    type === "discover"
      ? useFetchGenreLists("movie", genre)
      : type === "trending"
      ? useFetchMoviesTrending()
      : useFetchMovies(type);
  if (status === "pending") <p className="text-white">Loading....</p>;
  if (status === "error") <p className="text-white">Error : {error.message}</p>;
  return (
    <CustomLayout>
      {type === "discover" ? (
        <SelectedGenres genreName={genre} setGenre={setGenre} type={"movie"} />
      ) : null}
      <ListMovie
        movies={data}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </CustomLayout>
  );
}

export default transition(MovieLists);
