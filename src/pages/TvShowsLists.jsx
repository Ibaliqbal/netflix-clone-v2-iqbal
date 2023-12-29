import React from "react";
import CustomLayout from "../components/layout/CustomLayout";
import ListTvShow from "../components/Fragments/Lists/ListTvShow";
import transition from "../transition";

function TvShowsLists() {
  return (
    <CustomLayout>
      <ListTvShow />
    </CustomLayout>
  );
}

export default transition(TvShowsLists);
