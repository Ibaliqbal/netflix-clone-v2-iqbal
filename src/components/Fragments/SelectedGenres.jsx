import React, { useEffect } from "react";
import { fetchGenres } from "../../data/api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function SelectedGenres({ type, setGenre, genreName }) {
  const navigate = useNavigate();
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["genres"],
    queryFn: () => fetchGenres(type),
  });

  if (isLoading) return "Loading...";
  if (isError) return `Error: ${error.message}`;
  return (
    <section className="w-full mt-8">
      <div className="container">
        <div className="flex flex-wrap justify-center px-2">
          {data?.map((genre) => (
            <button
              onClick={() => setGenre(genre.id)}
              className={`px-4 py-2 m-2 text-[15px] ${
                genreName === genre.id ? "bg-secondary" : "bg-slate-800"
              } text-white font-semibold rounded-3xl`}
              key={genre.id}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedGenres;
