import React from "react";
import Header from "../Header";
import SideBar from "../SideBar";

function CustomLayout({ children, setSearchParam }) {
  return (
    <div className="bg-primary w-full pb-10">
      <Header />
      <main className="w-full pt-12">
        <div className="container flex flex-col gap-4">
          <SideBar setSearchParam={setSearchParam}/>
          {children}
        </div>
      </main>
    </div>
  );
}

export default CustomLayout;
