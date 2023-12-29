import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  fetchDetailMovie,
  fetchDetailTvShow,
  fetchDiscoverMovies,
  fetchDiscoverTvShows,
  fetchMovies,
  fetchSearchLists,
  fetchTrendingMovies,
  fetchTrendingTvShows,
  fetchTvShows,
} from "../data/api";

export const useFetchMovies = (type) => {
  let nextPage;
  const {
    data: movies,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [`movies-${type}`],
    queryFn: (props) => fetchMovies(type, props),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      switch (type) {
        case "popular":
          nextPage = allPage.length !== 500 ? allPage.length + 1 : undefined;
          return nextPage;
        case "now_playing":
          nextPage = lastPage.length ? allPage.length + 1 : undefined;
          return nextPage;
        case "top_rated":
          nextPage = lastPage.length ? allPage.length + 1 : undefined;
          return nextPage;
        case "upcoming":
          nextPage = lastPage.length ? allPage.length + 1 : undefined;
          return nextPage;
        default:
          break;
      }
    },
  });
  return [
    movies,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  ];
};

export const useFetchMoviesDiscover = () => {
  const {
    data: movies,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies-discover"],
    queryFn: fetchDiscoverMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = allPage.length !== 500 ? allPage.length + 1 : undefined;
      return nextPage;
    },
  });
  return [
    movies,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  ];
};

export const useFetchMoviesTrending = () => {
  const {
    data: movies,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies-trending"],
    queryFn: fetchTrendingMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = allPage.length !== 500 ? allPage.length + 1 : undefined;
      return nextPage;
    },
  });
  return [
    movies,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  ];
};

export const useFetchDetailMovie = (id) => {
  const {
    data: movie,
    error,
    isLoasding,
    isError,
  } = useQuery({
    queryKey: [`movie`, id],
    queryFn: () => fetchDetailMovie(id),
    staleTime: 5000,
  });
  return [movie, error, isLoasding, isError];
};

export const useFetchDetailTvShow = (id) => {
  const {
    data: show,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`tv`, id],
    queryFn: () => fetchDetailTvShow(id),
    staleTime: 5000,
  });
  return [show, error, isLoading, isError];
};

export const useFetchTvShows = (type) => {
  let nextPage;
  const {
    data: shows,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [`tv-${type}`],
    queryFn: (props) => fetchTvShows(type, props),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      switch (type) {
        case "popular":
          nextPage = allPage.length !== 500 ? allPage.length + 1 : undefined;
          return nextPage;
        case "top_rated":
          nextPage = lastPage.length ? allPage.length + 1 : undefined;
          return nextPage;
        default:
          break;
      }
    },
  });
  return [shows, error, fetchNextPage, isFetchingNextPage, hasNextPage, status];
};

export const useFetchTvShowsDiscover = () => {
  const {
    data: shows,
    error,
    status,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["tv-discover"],
    queryFn: fetchDiscoverTvShows,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = allPage.length !== 500 ? allPage.length + 1 : undefined;
      return nextPage;
    },
  });
  return [shows, error, status, hasNextPage, fetchNextPage, isFetchingNextPage];
};

export const useFetchTvShowsTrending = () => {
  const {
    data: shows,
    error,
    status,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["tv-trending"],
    queryFn: fetchTrendingTvShows,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = allPage.length !== 500 ? allPage.length + 1 : undefined;
      return nextPage;
    },
  });
  return [shows, error, status, hasNextPage, fetchNextPage, isFetchingNextPage];
};

export const useFetchSeacrhLists = (endpoint, query) => {
  const {data, status, isFetchingNextPage, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: [`${endpoint}-search`, query],
    queryFn: (props) => fetchSearchLists(endpoint, query, props),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = lastPage.length ? allPage.length + 1 : undefined
      return nextPage;
    }
  })
  return [data, status, fetchNextPage, isFetchingNextPage, hasNextPage]
}
