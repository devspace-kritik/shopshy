import React from "react";
import "./index.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search for products..."
        className="searchInput"
      />
      <Button
        className="searchButton"
        sx={{
          width: 38,
          height: 38,
          minWidth: 38,
          borderRadius: "50%",
          color: '#363535'
        }}
      >
        <IoSearch className="searchIconStyle"/>
      </Button>
    </div>
  );
};

export default Search;
