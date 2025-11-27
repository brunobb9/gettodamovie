import React from "react";
import Header from "./header";
import Search from "./Search";

export default function Body() {
  return (
    <div className="bodyContainer">
      <Header />
      <Search />
    </div>
  );
}