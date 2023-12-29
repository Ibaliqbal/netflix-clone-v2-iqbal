import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTrendingMoviesHome } from "../../data/api";
import { useNavigate } from "react-router-dom";
import CardMovie from "../Elements/Card/CardMovie";

function TrendingMovies() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trendingmovies-home"],
    queryFn: fetchTrendingMoviesHome,
  });
  if (isLoading) return "Loading....";
  if (isError) return `Error : ${error.message}`;
  return (
    <section className="w-full mb-14">
      <div className="container">
        <div className="flex justify-between text-white mb-10">
          <h1 className="text-xl font-semibold lg:text-4xl">
            Trending Movie This Week
          </h1>
          <button
            type="button"
            className="bg-secondary text-white py-1 px-4 rounded-md"
            onClick={() => navigate("movies/trending")}
          >
            See More
          </button>
        </div>
        <div className="w-full grid md:grid-cols-4 grid-cols-2 place-items-center items-center gap-6">
          {data?.slice(0, 4).map((movie) => {
            return <CardMovie movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default TrendingMovies;
