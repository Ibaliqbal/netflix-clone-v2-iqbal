import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { useLocation } from "react-router-dom";

function SideBar({ setSearchParam }) {
  const location = useLocation();
  return (
    <aside className="w-full">
      <section className="w-full">
        <div className="container text-white max-w-md md:max-w-full shadow-slate-700 shadow-lg rounded-md pt-5">
          <h1 className="text-secondary font-bold text-3xl">NETFLIX</h1>
          <nav className="w-full px-3 py-6 flex flex-col">
            <div className="mt-3 w-full navbar">
              <h3 className="font-bold">MOVIES</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3 lg:grid-cols-6 navbar-nav">
                {location.pathname === "/movies" ? (
                  <form
                    action=""
                    className="flex relative"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = new FormData(e.target);
                      const searchInput = form.get("search");
                      const encodeInput = encodeURI(searchInput);
                      console.log(searchInput);
                      setSearchParam({ search: encodeInput });
                    }}
                  >
                    <input
                      name="search"
                      type="text"
                      placeholder="Search movies..."
                      className="w-full px-8 md:py-2 py-4 rounded-md text-primary text-lg"
                    />
                    <button
                      type="submit"
                      className="absolute text-3xl right-2 md:top-3 top-4 text-black"
                    >
                      <IoMdSearch />
                    </button>
                  </form>
                ) : (
                  <Link
                    to={"/movies"}
                    className="inline-flex justify-center duration-500 px-8 py-4 rounded-md md:max-w-56 max-w-full border-2 border-secondary text-secondary nav-lists"
                  >
                    Search Movies
                  </Link>
                )}
                <NavLink
                  to={"/movies/discover"}
                  className="inline-flex justify-center duration-500 px-8 py-4 rounded-md md:max-w-56 max-w-full border-2 border-secondary text-secondary nav-lists"
                >
                  Discover
                </NavLink>
                <NavLink
                  to={"/movies/popular"}
                  className="inline-flex justify-center duration-500 px-8 py-4 rounded-md md:max-w-56 max-w-full border-2 border-secondary text-secondary nav-lists"
                >
                  Popular
                </NavLink>
                <NavLink
                  to={"/movies/top_rated"}
                  className="inline-flex justify-center duration-500 px-8 py-4 rounded-md md:max-w-56 max-w-full border-2 border-secondary text-secondary nav-lists"
                >
                  Top Rated
                </NavLink>
                <NavLink
                  to={"/movies/upcoming"}
                  className="inline-flex justify-center duration-500 px-8 py-4 rounded-md md:max-w-56 max-w-full border-2 border-secondary text-secondary nav-lists"
                >
                  Upcoming
                </NavLink>
                <NavLink
                  to={"/movies/now_playing"}
                  className="inline-flex justify-center duration-500 px-8 py-4 rounded-md md:max-w-56 max-w-full border-2 border-secondary text-secondary nav-lists"
                >
                  Now Playing
                </NavLink>
                <NavLink
                  to={"/movies/trending"}
                  className="inline-flex justify-center duration-500 px-8 py-4 rounded-md md:max-w-56 max-w-full border-2 border-secondary text-secondary nav-lists"
                >
                  Trending
                </NavLink>
              </div>
            </div>
            <div className="mt-3 w-full navbar">
              <h3 className="font-bold">TV SHOWS</h3>
              <div className="mt-4 grid lg:grid-cols-6 md:grid-cols-3 gap-4 navbar-nav">
                {location.pathname === "/tv" ? (
                  <form
                    action=""
                    className="flex relative"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = new FormData(e.target);
                      const searchInput = form.get("searchTv");
                      const encodeInput = encodeURI(searchInput);
                      console.log(searchInput);
                      setSearchParam({ search: encodeInput });
                    }}
                  >
                    <input
                      name="searchTv"
                      type="text"
                      placeholder="Search movies..."
                      className="w-full px-6 md:py-1 py-3 rounded-md text-primary text-lg"
                    />
                    <button
                      type="submit"
                      className="absolute text-3xl right-2 md:top-2 top-3 text-black"
                    >
                      <IoMdSearch />
                    </button>
                  </form>
                ) : (
                  <Link
                    to={"/tv"}
                    className="inline-flex justify-center duration-500 px-6 py-3 rounded-md border-2 border-secondary text-secondary nav-lists"
                  >
                    Search Tv Shows
                  </Link>
                )}

                <NavLink
                  to={"/tv_show/discover"}
                  className="inline-flex justify-center duration-500 px-6 py-3 rounded-md border-2 border-secondary text-secondary nav-lists"
                >
                  Discover
                </NavLink>
                <NavLink
                  to={"/tv_show/popular"}
                  className="inline-flex justify-center duration-500 px-6 py-3 rounded-md border-2 border-secondary text-secondary nav-lists"
                >
                  Popular
                </NavLink>
                <NavLink
                  to={"/tv_show/top_rated"}
                  className="inline-flex justify-center duration-500 px-6 py-3 rounded-md border-2 border-secondary text-secondary nav-lists"
                >
                  Top Rated
                </NavLink>
                <NavLink
                  to={"/tv_show/trending"}
                  className="inline-flex justify-center duration-500 px-6 py-3 rounded-md border-2 border-secondary text-secondary nav-lists"
                >
                  Trending
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </aside>
  );
}

export default SideBar;
