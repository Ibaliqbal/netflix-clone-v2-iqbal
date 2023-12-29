import React from "react";
import CustomLayout from "../components/layout/CustomLayout";
import ListMovie from "../components/Fragments/Lists/ListMovie";
import transition from "../transition";

function MovieLists() {
  return (
    <CustomLayout>
      <ListMovie />
    </CustomLayout>
  );
}

export default transition(MovieLists);
