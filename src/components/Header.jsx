import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full">
      <section className="container text-white">
        <div className="w-full px-2 py-4 flex justify-between items-center">
          <h1 className="font-bold text-secondary lg:text-2xl">NETFLIX</h1>
          <div className="flex items-center gap-4">
            <NavLink to={"/"}>Home</NavLink>
            <button className="bg-secondary px-4 py-2 rounded-md">Login</button>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
